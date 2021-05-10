import React from 'react'
import MessageIndexContainer from '../messages/message_index_container'


class ThreadDisplay extends React.Component{
  constructor(props){
    super(props)

  }

  render(){ 

    let threadId = this.props.currentThreadId || this.props.currentThreadSearch
    return(
      <MessageIndexContainer type={"thread"} currentThreadId={threadId} />
    )
  }
}

export default ThreadDisplay