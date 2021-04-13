import React from 'react'
import createThread from './create_thread'

class ThreadForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.thread
    this.state.creator_id = this.props.creatorId

    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateTitle = this.updateTitle.bind(this)
  }

  helperFunction(thread){ 
    createThread(thread.id, this.props.receiveMessage, this.props.receiveMessages, this.props.removeMessage)
    this.props.receiveCurrentThread(thread)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.submit(this.state)
      .then((thread) => this.helperFunction(thread))
    this.setState({
      title: ""
    })
  }

  
  updateTitle(e){
    this.setState({
      title: e.target.value
    })
  }


  render(){
    return(
      <form className="thread-form" onSubmit={this.handleSubmit}>
        <input onChange={this.updateTitle} type="text" placeholder="Channel Title" value={this.state.title}></input>
        <input type="submit"></input>
      </form>
    )

  }

}

export default ThreadForm