import React from 'react'
import MessageIndexContainer from '../messages/message_index_container'

class ThreadDisplay extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      this.props.currentThreadId === undefined ? null : <MessageIndexContainer currentThreadId={this.props.currentThreadId} />
    )
  }
}

export default ThreadDisplay