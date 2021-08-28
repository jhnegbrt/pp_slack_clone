import React from 'react'
import createMessagesConnection from '../../../util/action_cable_util/create_messages_connection'
import { NavLink } from 'react-router-dom'
import { receiveAllThreads } from '../../../actions/thread_actions'

class ThreadIndexItem extends React.Component{
  constructor(props){
  super(props)
    this.selectThread = this.selectThread.bind(this)
    this.createTitle = this.createTitle.bind(this)
  }

  selectThread(){
    this.props.selectThread(this.props.thread.id)
  }

  receiveMessageOrNotification(data){
    const {currentThreadId, receiveMessage, incrementNotifications } = this.props
    if (currentThreadId === data.channel_dms_id){
      receiveMessage(data)
    } else {
      incrementNotifications(data.channel_dms_id)
    }
  }

  componentDidMount(){
    const {thread, receiveMessages, removeMessage} = this.props
    createMessagesConnection(thread.id, this.receiveMessageOrNotification, receiveMessages, removeMessage)
  }

  createTitle(){
    let channelUsers = this.props.thread.users.filter((id)=>{return id !== this.props.currentUserId})
    if(Object.keys(this.props.users).length === 0){
      return
    }
    let allUsers = this.props.users
    let userNames = []
    channelUsers.forEach((id)=>{
      if (allUsers[id]){
        return userNames.push(allUsers[id].username)
      }
    })
    let title = userNames.join(", ")
    if (title.length > 36){
      return title.slice(0, 55).concat("...")
    } else {
      return title.slice(0, title.length)
    }
  }

  render(){
    let title = this.createTitle()
    return(
      <li className={this.props.currentThreadId === this.props.thread.id ? "thread-select" : null}>
        <NavLink
          styles={this.props.notifications ? {fontWeight: "bold"} : ""}
          onClick={this.selectThread} 
          activeClassName={"active-thread"} 
          to={`/client/${this.props.thread.id}`}>
          { this.props.thread.channel === true ? this.props.thread.title : title}
        </NavLink>
      </li>
    )
  }
}

export default ThreadIndexItem

