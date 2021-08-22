import React from 'react'
import MessageIndexContainer from '../../messages/message_index_container'
import ThreadTitleContainer from '../thread_title/thread_title_container'


class ThreadDisplay extends React.Component{
  constructor(props){
    super(props)
  }

  render(){ 
    let threadId = this.props.currentThreadId
    return(
      <div className="thread-display">
        <ThreadTitleContainer currentThreadId={threadId} />
        <MessageIndexContainer type={"thread"} currentThreadId={threadId} />
      </div>
    )
  }
}

export default ThreadDisplay