import React from 'react'

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
      <li><button name={this.props.thread.id} onClick={this.selectThread}>{this.props.thread.title}</button></li>
    )
  }
}

export default ThreadIndexItem

