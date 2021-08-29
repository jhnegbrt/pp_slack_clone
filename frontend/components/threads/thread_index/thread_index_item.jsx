import React from 'react'
import { NavLink } from 'react-router-dom'
import createMessagesConnection from '../../../util/action_cable_util/create_messages_connection'


class ThreadIndexItem extends React.Component{
  constructor(props){
  super(props)

    this.selectThread = this.selectThread.bind(this)
    this.createTitle = this.createTitle.bind(this)
  }

  selectThread(){
    this.props.selectThread(this.props.thread.id)
  }

  componentDidMount(){
    const {thread, receiveMessage, receiveMessages, removeMessage} = this.props
    createMessagesConnection(thread.id, receiveMessage, receiveMessages, removeMessage)
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
    if (userNames.length === 0){
      debugger
      this.props.fetchAllUsers()
    }
    let title = userNames.join(", ")
    if (title.length > 36){
      return title.slice(0, 55).concat("...")
    } else {
      return title.slice(0, title.length)
    }
  }

  render(){
    let title = this.props.thread.channel ? this.props.thread.title : this.createTitle()
    return(
      <li className={this.props.urlThreadId === this.props.thread.id ? "thread-select" : null}>
        <NavLink onClick={this.selectThread} activeClassName={"active-thread"} to={`/client/${this.props.thread.id}`}>
          { this.props.thread.channel === true ? this.props.thread.title : title}
        </NavLink>
      </li>
    )
  }
}

export default ThreadIndexItem

