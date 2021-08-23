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

function subscriptionsSpeak(type, ){

  let subscriptions = App.cable.subscriptions.subscriptions

  let index = findThreadOrChannel(type, subscriptions)

  if (type === "ThreadChannel"){
    subscriptions[index].speak({
      created: true,
      id: thread.id,
      users: [currentUserId],
      channel: true,
      private: false,
      title: thread.title,
      creator_id: thread.creator_id
    })
  } else {
    subscriptions[index].speak({
      message: "message"
    })
  }

  this.props.history.push(`/client/${res.id}`)
}

export function joinChannel(thread, currentUserId){

  subscriptionsSpeak("ThreadChannel")

}

export function createNewThread(){

  subscriptionsSpeak("ThreadChannel")
  subscriptionsSpeak("ChatChannel")

  for (let i = 0; i < subscriptions.length; i++){
    let identifier = JSON.parse(subscriptions[i].identifier)
    if (identifier.channel === "ChatChannel"){
      index = i
      break
    }
  }
  let message = {
    channel_dms_id: res.id,
    content: this.state.content,
    sender_id: this.state.creatorId,
    created: true
  }

}