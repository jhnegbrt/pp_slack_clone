import React from 'react'
import createMessagesConnection from '../../../util/create_messages_connection'

class ExploreItem extends React.Component{
  constructor(props){
    super(props)
    this.joinChannel = this.joinChannel.bind(this)
  }

  joinChannel(){
    const {thread, receiveMessage, receiveMessages, removeMessage} = this.props
    createMessagesConnection(thread.id, receiveMessage, receiveMessages, removeMessage, this.props.currentUserId)
  }

  render(){
    return(
      <div className="explore-item">
        <h4>{this.props.thread.title}</h4>
        <button onClick={this.joinChannel}>Join</button>
      </div>
    )
  }
}

export default ExploreItem