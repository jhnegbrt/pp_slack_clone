export default function createThreadsConnection(currentUserId, receiveThread, receiveAllThreads){
  
  App.cable.subscriptions.create(
    
    { channel: "ThreadChannel", user_id: currentUserId },
    {
      received: data => {
        switch (data.type){
          case "thread":
            receiveThread(data)
            break
          case "threads":
            receiveAllThreads(data.threads)
            break
        }
      },
      load: function() { return this.perform("load")},
      speak: function(thread) {
        return this.perform("speak", thread);
      }
    }
  )

}