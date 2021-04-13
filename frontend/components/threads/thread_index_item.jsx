import React from 'react'
import {receiveCurrentThread } from '../../actions/thread_actions'

class ThreadIndexItem extends React.Component{
  constructor(props){
    super(props)

    this.selectThread = this.selectThread.bind(this)
  }

  selectThread(e){
    receiveCurrentThread(e.currentTarget.name)
  }

  render(){
    return(
      <li><button name={this.props.thread.id} onClick={this.selectThread}>{this.props.thread.title}</button></li>
    )
  }
}

export default ThreadIndexItem

