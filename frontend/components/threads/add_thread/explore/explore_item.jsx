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

    let subscriptions = App.cable.subscriptions.subscriptions
    let index;
    for (let i = 0; i < subscriptions.length; i++){
      let identifier = JSON.parse(subscriptions[i].identifier)
      if (identifier.channel === "ThreadChannel"){
        index = i
        break
      }
    }
    subscriptions[index].load()
    // this.props.selectThread(this.props.thread.id)
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