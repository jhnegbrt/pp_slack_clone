class ChatChannel < ApplicationCable::Channel

  def subscribed
    
    stream_for "chat_channel_#{params['thread_id']}"
    self.load
    
  end

  def load
    messages = Message.where("channel_dms_id = #{params['thread_id']}").includes(:sender)
    messages_hash = {}
    messages.each do |m|
  
      messages_hash[m.id] = m.as_json
      messages_hash[m.id]["sender"] = m.sender["username"]
      messages_hash[m.id]["time"] = m["updated_at"]
    end
    socket = {
      type: "messages",
      messages: messages_hash
    }
    ChatChannel.broadcast_to("chat_channel_#{params['thread_id']}", socket)
  end

  def speak(data)

    channel_dms_id = data['message']['channel_dms_id']

    new_message = Message.create(
      content: data['message']['content'], 
      sender_id: data['message']['sender_id'],
      channel_dms_id: channel_dms_id
    )
    
    sender = Message.find_by(id: new_message.id).sender
    time = new_message["updated_at"]
    socket = {
      type: "message",
      id: new_message.id, 
      content: new_message.content,
      sender_id: new_message.sender_id,
      channel_dms_id: new_message.channel_dms_id,
      sender: sender["username"],
      time: time
    }
    ChatChannel.broadcast_to("chat_channel_#{channel_dms_id}", socket)
  end

  def update_message(data)

    channel_dms_id = data['message']['channel_dms_id']

    message = Message.find_by(id: data['message']['id'])
    message.update(content: data['message']['content'])
    sender = Message.find_by(id: message.id).sender
    time = message["updated_at"]
    socket = { 
      type: "message",
      id: message.id, 
      content: message.content,
      sender_id: message.sender_id,
      sender: sender["username"],
      time: time,
      channel_dms_id: channel_dms_id
    }
    ChatChannel.broadcast_to("chat_channel_#{params['thread_id']}", socket)
  end

  def remove_message(data)
    message = Message.find_by(id: data['message'])
    message.delete
    socket = {
      type: "delete",
      message_id: data['message']
    }
    ChatChannel.broadcast_to("chat_channel_#{params['thread_id']}", socket)
  end

  def unsubscribed; end
end
