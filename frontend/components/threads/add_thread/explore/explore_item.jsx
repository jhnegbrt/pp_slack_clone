import React from 'react'
import {joinChannel, findThreadChannel} from '../../../../util/action_cable_util/join_channel'

class ExploreItem extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      hover: false
    })
    this.hovering = this.hovering.bind(this)
    this.notHovering = this.notHovering.bind(this)

    // this.joinChannel = this.joinChannel.bind(this)
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
    let index = findThreadChannel(subscriptions)
    subscriptions[index].leaveThread({
      thread: thread.id,
      user: currentUserId
    })

  }

  render(){  
    const { thread, currentUserId } = this.props
    return(
      <div className="explore-item"
      onMouseEnter={this.hovering}
      onMouseLeave={this.notHovering}>
        <h4>{this.props.thread.title}</h4>
        {
          this.state.hover === true ? 
          this.props.member ? 
          <button className="leave-button" onClick={this.leaveChannel}>Leave</button> :
          <button className="join-button" onClick={()=> joinChannel(thread, currentUserId)}>Join</button>: null
        }
      </div>
    )
  }
}

export default ExploreItem