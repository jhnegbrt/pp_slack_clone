import React from 'react'
import ThreadIndexItemContainer from './thread_index_item_container'
import createThreadsConnection from './create_threads_connection'

class ThreadIndex extends React.Component{
  constructor(props){
    super(props)
    
  }

  componentDidMount(){
    this.props.fetchThreads()
  }

  componentDidMount(){
    const {currentUserId} = this.props
    createThreadsConnection(currentUserId, receiveThread, receiveAllThreads)
  }

  mapThread(thread){
    if (typeof thread === "number"){
      return
    } else {
      return <ThreadIndexItemContainer thread={thread} key={thread.id} threadId={thread.channel_dms_id}/>
    }
  }

  render(){
    const { threads } = this.props
    return(
      <div className="thread-index">
        <ul>
          {
            threads.map(this.mapThread)
          }
        </ul>
        <button name="channel" onClick={() => this.props.toggleModal("channel")}>Create Channel</button>
        <button name="message" onClick={() => this.props.toggleModal("message")}>New Message</button>
      </div>
    )
  }
}

export default ThreadIndex