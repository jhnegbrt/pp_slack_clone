import React from 'react'
import createConnection from './create_connection'

import { NavLink } from 'react-router-dom'

class ThreadIndexItem extends React.Component{
  constructor(props){
    super(props)

    this.selectThread = this.selectThread.bind(this)
  }

  selectThread(){
    this.props.selectThread(this.props.thread.id)
  }

  componentDidMount(){
    const {receiveMessage, thread, receiveMessages, removeMessage} = this.props
    createConnection(thread.id, receiveMessage, receiveMessages, removeMessage)
  }

  render(){
    debugger
    return(
      <li className={this.props.currentThreadId === this.props.thread.id ? "thread-select" : null}>
        <NavLink onClick={this.selectThread} activeClassName={"active-thread"} to={`/client/thread/${this.props.thread.id}`}>
          { this.props.thread.title }
        </NavLink>
      </li>
    )
  }
}

export default ThreadIndexItem

