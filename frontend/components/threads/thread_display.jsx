import React from 'react'
import MessageIndexContainer from '../messages/message_index_container'
import createConnection from './create_connection'

class ThreadDisplay extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    const {receiveMessage, currentThreadId, receiveCurrentMessages, removeMessage} = this.props
    createConnection(currentThreadId, receiveMessage, receiveCurrentMessages, removeMessage)

    return(
      <MessageIndexContainer currentThreadId={currentThreadId} />
    )
  }
}

export default ThreadDisplay