class ThreadChannel < ApplicationCable::Channel

  def subscribed
    stream_for "thread_channel_#{params['user_id']}"
    self.load
  end

  def load
  
    users_channel_dms = User.find_by(id: params['user_id']).channel_dms

    users_channel_dms_ids = []
    users_channel_dms.each do |channel_dm|
      users_channel_dms_ids << channel_dm.id
    end

    channel_dms_with_users = ChannelDm.includes(:users).find(users_channel_dms_ids)

    channel_dms_hash = {}
    channel_dms_with_users.each do |thread|
      channel_dms_hash[thread.id] = thread.as_json
      users = thread.users.map do |user|
        user.id
      end
      channel_dms_hash[thread.id][:users] = users
    end
    socket = {
      type: "threads",
      threads: channel_dms_hash
    }

    ThreadChannel.broadcast_to("thread_channel_#{params['user_id']}", socket)
    
  end

  def speak(data)
    if data["created"] != true
      channel_dm = ChannelDm.create(
        channel: data['channel'],
        private: data['private'],
        title: data['title'],
        creator_id: data['creator_id']
      )
      i = 0
      while i < data["users"].length
        socket = {
          type: "thread",
          id: channel_dm.id,
          title: channel_dm.title,
          creator_id: channel_dm.creator_id,
          channel: channel_dm.channel,
          private: channel_dm.private,
          users: data["users"]
        }
        user = data["users"][i]
        # might need to add check to see if already exists
        UserChannelDm.create(channel_dm_id: channel_dm.id, user_id: user)
        ThreadChannel.broadcast_to("thread_channel_#{user}", socket)
        i += 1
      end
    else
      channel_dm = {
        id: data["id"],
        title: data["title"],
        creator_id: data["creator_id"],
        private: data["private"],
        channel: data["channel"]
      }
      i = 0
      while i < data["users"].length
        socket = {
          type: "thread",
          id: channel_dm[:id],
          title: channel_dm[:title],
          creator_id: channel_dm[:creator_id],
          channel: channel_dm[:channel],
          private: channel_dm[:private],
          users: data["users"]
        }
        user = data["users"][i]
        UserChannelDm.create(channel_dm_id: channel_dm[:id], user_id: user )
        ThreadChannel.broadcast_to("thread_channel_#{user}", socket)
        i += 1
      end
    end
  end

  def leave_thread(data)
    ucd = UserChannelDm.where(user_id: data["user"]).where(channel_dm_id: data["thread"])
    ucd.delete_all
    socket = {
      type: "leave",
      thread: data["thread"]
    }
    ThreadChannel.broadcast_to("thread_channel_#{data["user"]}", socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
