import React from 'react'
import createMessagesConnection from '../../../../util/create_messages_connection'

class ExploreItem extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      hover: false
    })
    this.hovering = this.hovering.bind(this)
    this.notHovering = this.notHovering.bind(this)

    this.joinChannel = this.joinChannel.bind(this)
    this.leaveChannel = this.leaveChannel.bind(this)
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

  findThreadChannel(){
    let index;
    let subscriptions = App.cable.subscriptions.subscriptions
    for (let i = 0; i < subscriptions.length; i++){
      let identifier = JSON.parse(subscriptions[i].identifier)
      if (identifier.channel === "ThreadChannel"){
        index = i
        break
      }
    }
    return index
  }

  joinChannel(){
    const {thread, currentUserId } = this.props
    let subscriptions = App.cable.subscriptions.subscriptions
    let index = this.findThreadChannel()
    subscriptions[index].speak({
      created: true,
      id: thread.id,
      users: [currentUserId],
      channel: true,
      private: false,
      title: thread.title,
      creator_id: thread.creator_id
    })
  }

  leaveChannel(){
    const { thread, currentUserId } = this.props
    let index = this.findThreadChannel()
    let subscriptions = App.cable.subscriptions.subscriptions
    subscriptions[index].leaveThread({
      thread: thread.id,
      user: currentUserId
    })

  }

  render(){   
    return(
      <div className="explore-item"
      onMouseEnter={this.hovering}
      onMouseLeave={this.notHovering}>
        <h4>{this.props.thread.title}</h4>
        {
          this.state.hover === true ? 
          this.props.member ? 
          <button className="leave-button" onClick={this.leaveChannel}>Leave</button> :
          <button className="join-button" onClick={this.joinChannel}>Join</button>: null
        }
      </div>
    )
  }
}

export default ExploreItem