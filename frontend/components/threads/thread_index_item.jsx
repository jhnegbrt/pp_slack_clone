import React from 'react'
import createConnection from './create_connection'

import { NavLink } from 'react-router-dom'

class ThreadIndexItem extends React.Component{
  constructor(props){
    super(props)

    this.selectThread = this.selectThread.bind(this)
  }

  selectThread(e){
    this.props.selectThread(e.currentTarget.name)
  }

  componentDidMount(){
    const {receiveMessage, thread, receiveMessages, removeMessage} = this.props
    createConnection(thread.id, receiveMessage, receiveMessages, removeMessage)
  }

  render(){
    
    return(
      <li>
        <NavLink to={`/client/thread/${this.props.thread.id}`}>
          { this.props.thread.title }
        </NavLink>
      </li>
    )
  }
}

export default ThreadIndexItem

