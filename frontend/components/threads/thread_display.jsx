import React from 'react'
import MessageIndex from '../messages/message_index'

class ThreadDisplay extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <MessageIndex threadId={this.props.threadId}></MessageIndex>
    )
  }
}

export default ThreadDisplay