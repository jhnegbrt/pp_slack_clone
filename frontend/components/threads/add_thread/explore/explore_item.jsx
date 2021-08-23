import React from 'react'
import {joinChannel, findThreadOrChannel} from '../../../../util/action_cable_util/channel_util'

class ExploreItem extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      hover: false
    })
    this.hovering = this.hovering.bind(this)
    this.notHovering = this.notHovering.bind(this)

    this.handleJoinChannel = this.handleJoinChannel.bind(this)
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

  leaveChannel(){
    const {thread, currentUserId} = this.props
    let subscriptions = App.cable.subscriptions.subscriptions
    let index = findThreadOrChannel("ThreadChannel", subscriptions)
    subscriptions[index].leaveThread({
      thread: thread.id,
      user: currentUserId
    })

  }

  handleJoinChannel(){
    const {history, thread, currentUserId} = this.props
    joinChannel(thread, currentUserId)
    history.push(`/client/${thread.id}`)
  }

  render(){  
    const { thread, member } = this.props
    return(
      <div className="explore-item"
      onMouseEnter={this.hovering}
      onMouseLeave={this.notHovering}>
        <h4>{thread.title}</h4>
        {
          this.state.hover === true ? member ? 
          <button className="leave-button" onClick={this.leaveChannel}>Leave</button> :
          <button className="join-button" onClick={this.handleJoinChannel}>Join</button>: null
        }
      </div>
    )
  }
}

export default ExploreItem