import React from 'react'
import ThreadIndexItemContainer from './thread_index_item_container'
import CreateThreadFormContainer from './create_thread_form_container'


class ThreadIndex extends React.Component{
  constructor(props){
    super(props)
    
  }

  componentDidMount(){
    this.props.fetchThreads()
  }

  mapThread(thread){
    if (typeof thread === "number"){
      return
    } else {
      return <ThreadIndexItemContainer thread={thread} key={thread.id} threadId={thread.channel_dms_id}/>
    }
  }

  render(){
    debugger
    const { threads } = this.props
    return(
      <div className="thread-index">
        <ul>
          {
            threads.map(this.mapThread)
          }
        </ul>
        <button name="channel" onClick={()=>this.props.toggleModal("channel")}>Create Channel</button>
        <button name="message" onClick={() => this.props.toggleModal("message")}>New Message</button>
        {/* <CreateThreadFormContainer /> */}
      </div>
    )
  }
}

export default ThreadIndex