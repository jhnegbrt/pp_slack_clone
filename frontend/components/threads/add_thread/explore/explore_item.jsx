import React from 'react'
import createMessagesConnection from '../../../../util/create_messages_connection'

class ExploreItem extends React.Component{
  constructor(props){
    super(props)
    this.joinChannel = this.joinChannel.bind(this)
    this.state = ({
      hover: false
    })
    this.hovering = this.hovering.bind(this)
    this.notHovering = this.notHovering.bind(this)
  }

  hovering(){
    if(this.state.hover === false){
      this.setState({
        hover: true
      })
    }
  }

  notHovering(){
    if(this.state.hover === true){
      this.setState({
        hover: false
      })
    }
  }

  joinChannel(){
    debugger
    const {thread, currentUserId, receiveMessage, receiveMessages, removeMessage} = this.props
    // createMessagesConnection(thread.id, receiveMessage, receiveMessages, removeMessage, this.props.currentUserId)

    let subscriptions = App.cable.subscriptions.subscriptions
    let index;
    for (let i = 0; i < subscriptions.length; i++){
      let identifier = JSON.parse(subscriptions[i].identifier)
      if (identifier.channel === "ThreadChannel"){
        index = i
        break
      }
    }
    subscriptions[index].speak({
      created: true,
      id: thread.id,
      users: [currentUserId],
      channel: true,
      private: false,
      title: thread.title,
      creator_id: thread.creator_id
    })
    // this.props.selectThread(this.props.thread.id)
  }

  render(){
    return(
      <div className="explore-item"
      onMouseEnter={this.hovering}
      onMouseLeave={this.notHovering}>
        <h4>{this.props.thread.title}</h4>
        {this.state.hover === true ? 
        <button className="join-button" onClick={this.joinChannel}>Join</button>: null}
      </div>
    )
  }
}

export default ExploreItem