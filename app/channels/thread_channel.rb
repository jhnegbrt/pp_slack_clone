class ThreadChannel < ApplicationCable::Channel
  def subscribed
    stream_for "thread_channel_#{params['user_id']}"
    self.load
  end

  def load
    channel_dms = User.find_by(id: params['user_id']).channel_dms

    channel_dms_hash = {}
    channel_dms.each do |thread|
      channel_dms_hash[thread.id] = thread.as_json
    end
    socket = {
      type: "threads",
      threads: channel_dms_hash
    }

    ThreadChannel.broadcast_to("thread_channel_#{params['user_id']}", socket)
  end

  def speak(data)
    
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
        private: channel_dm.private
      }
      user = data["users"][i]
      ThreadChannel.broadcast_to("thread_channel_#{user}", socket)
      i += 1
    end

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
