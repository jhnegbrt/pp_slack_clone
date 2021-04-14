import React from 'react'
import createThread from './create_thread'
import { NavLink } from 'react-router-dom'

class ThreadIndexItem extends React.Component{
  constructor(props){
    super(props)

    this.selectThread = this.selectThread.bind(this)
  }

  selectThread(e){
    this.props.selectThread(e.currentTarget.name)
  }

  render(){
    return(
      <li><NavLink to={`/client/thread/${this.props.thread.id}`}>{this.props.thread.title}</NavLink></li>
    )
  }
}

export default ThreadIndexItem

