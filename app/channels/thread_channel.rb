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

  # t.boolean "channel", null: false
  # t.boolean "private", null: false
  # t.string "title", null: false
  # t.integer "creator_id"

  def speak(data)

    thread = ChannelDm.create(
      channel: data['thread']['channel'],
      private: data['thread']['private'],
      title: data['thread']['title'],
      creator_id: data['thread'][]
    )

    socket = {
      type: "thread",
      id: thread.id,
      title: thread.title,
      creator_id: thread.creator_id,
      channel: thread.channel,
      private: thread.private
    }

    ThreadChannel.broadcast_to("thread_channel_#{params['user_id']}", socket)

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
