import React from 'react'
import createMessagesConnection from '../../util/create_messages_connection'

import { NavLink } from 'react-router-dom'

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
    this.props.fetchAllUsers()
    const {thread, receiveMessage, receiveMessages, removeMessage} = this.props
    createMessagesConnection(thread.id, receiveMessage, receiveMessages, removeMessage, this.props.currentUserId)
  }


  createTitle(){
    let channelUsers = this.props.thread.users.filter((id)=>{return id !== this.props.currentUserId})
    if(Object.keys(this.props.users).length === 0){
      return
    }
    debugger
    let allUsers = this.props.users
    let userNames = []
    channelUsers.forEach((id)=>{
      return userNames.push(allUsers[id].username)
    })
    return userNames.join(", ")
  }

  render(){
    let title = this.createTitle()
    return(
      <li className={this.props.currentThreadId === this.props.thread.id ? "thread-select" : null}>
        <NavLink onClick={this.selectThread} activeClassName={"active-thread"} to={`/client/thread/${this.props.thread.id}`}>
          { this.props.thread.channel === true ? this.props.thread.title : title}
        </NavLink>
      </li>
    )
  }
}

export default ThreadIndexItem

