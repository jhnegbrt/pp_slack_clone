export function findThreadOrChannel(type, subscriptions){

  let index;
  let i = 0;
  for (let i = 0; i < subscriptions.length; i++){
    let identifier = JSON.parse(subscriptions[i].identifier)
    if (identifier.channel === type){
      index = i
      break
    }
    i += 1
  }
  return index
}

function subscriptionsSpeak(type, data, content){

  let subscriptions = App.cable.subscriptions.subscriptions

  let index = findThreadOrChannel(type, subscriptions)
  if (type === "ThreadChannel"){
    subscriptions[index].speak({
      created: true,
      id: data.thread.id,
      users: data.users,
      channel: data.thread.channel,
      private: false,
      title: data.thread.title,
      creator_id: data.thread.creator_id,
      content: data.content
    })
  } else {
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

  subscriptionsSpeak("ThreadChannel", {thread, users: [currentUserId]}, currentUserId)

}

export function propagateThread(thread, users, content){

  subscriptionsSpeak("ThreadChannel", {thread, users, content})

  // if (content){
  //   subscriptionsSpeak("ChatChannel", {thread}, content )
  // }

}
