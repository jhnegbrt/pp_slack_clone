export function findThreadOrChannel(type, subscriptions){

  let index;
  for (let i = 0; i < subscriptions.length; i++){
    let identifier = JSON.parse(subscriptions[i].identifier)
    if (identifier.channel === type){
      index = i
      break
    }
  }
  return index
}

function subscriptionsSpeak(type, data, content){

  let subscriptions = App.cable.subscriptions.subscriptions

  let index = findThreadOrChannel(type, subscriptions)
  debugger
  if (type === "ThreadChannel"){
    subscriptions[index].speak({
      created: true,
      id: data.thread.id,
      users: data.users,
      channel: data.thread.channel,
      private: false,
      title: data.thread.title,
      creator_id: data.thread.creator_id
    })
  } else {
    debugger
    let message = {
      channel_dms_id: data.thread.id,
      content: content,
      sender_id: data.thread.creator_id,
    }
    subscriptions[index].speak({
      message: message
    })
  }
}

export function joinChannel(thread, currentUserId){

  subscriptionsSpeak("ThreadChannel")
  this.props.history.push(`/client/${thread.id}`)

}

export function propagateThread(thread, users, content){

  subscriptionsSpeak("ThreadChannel", {thread, users})
  subscriptionsSpeak("ChatChannel", {thread}, content)

}