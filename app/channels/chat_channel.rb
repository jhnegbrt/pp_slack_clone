class ChatChannel < ApplicationCable::Channel

  def subscribed
    stream_for 'chat_channel'
  end

  def speak(data)
    # debugger
    message = Message.create(content: data['message']['content'], sender_id: data['message']['sender_id'])
    socket = { message: message.content }
    ChatChannel.broadcast_to('chat_channel', socket)
  end
  def unsubscribed; end
end


# ['content'], sender_id: data['message']['sender_id']
