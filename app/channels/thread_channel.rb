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
    else
      channel_dm = {
        type: "thread",
        id: 
      }
    end

    # debugger
    i = 0
    while i < data["users"].length
      socket = {
        type: "thread",
        id: channel_dm.id,
        title: channel_dm.title,
        creator_id: channel_dm.creator_id,
        channel: channel_dm.channel,
        private: channel_dm.private
      }
      user = data["users"][i]
      ThreadChannel.broadcast_to("thread_channel_#{user}", socket)
      i += 1
    end
    
    # if data['first_message'] != undefined
    #   channel_dms_id = channel_dm.id

    #   new_message = Message.create(
    #     content: data['first_message'], 
    #     sender_id: channel_dm.creator_id,
    #     channel_dms_id: channel_dms_id
    #   )
      
    #   sender = Message.find_by(id: new_message.id).sender
    #   time = new_message["updated_at"]
    #   socket = {
    #     type: "message",
    #     id: new_message.id, 
    #     content: new_message.content,
    #     sender_id: new_message.sender_id,
    #     channel_dms_id: new_message.channel_dms_id,
    #     sender: sender["username"],
    #     time: time
    #   }
    #   ChatChannel.broadcast_to("chat_channel_#{channel_dms_id}", socket)
    # end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
