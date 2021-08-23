export default function joinChannel(thread, currentUserId){

  let subscriptions = App.cable.subscriptions.subscriptions

  let index;
  for (let i = 0; i < subscriptions.length; i++){
    let identifier = JSON.parse(subscriptions[i].identifier)
    if (identifier.channel === "ThreadChannel"){
      index = i
      break
    }
  }

  subscriptions[index].speak({
    created: true,
    id: thread.id,
    users: [currentUserId],
    channel: true,
    private: false,
    title: thread.title,
    creator_id: thread.creator_id
  })

}