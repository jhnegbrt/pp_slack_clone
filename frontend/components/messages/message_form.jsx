import React from 'react'

class MessageForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.message
    this.state.sender_id = this.props.senderId

    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateContent = this.updateContent.bind(this)
  }

  // action cable handleSubmit
  handleSubmit(e){
    e.preventDefault()

    if (this.props.formType === "Edit Message"){
      App.cable.subscriptions.subscriptions[0].update({ message: this.state})
      debugger
      this.props.toggleEdit();
    } else {
      App.cable.subscriptions.subscriptions[0].speak({ message: this.state})
      this.setState({
        content: ""
      })
    }
  }


  updateContent(e){
    this.setState({
      content: e.target.value
    })
  }

  render(){
    return(
      <form className="thread-form" onSubmit={this.handleSubmit}>
        <input onChange={this.updateContent} type="text" placeholder="SEND MESSAGE" value={this.state.content}></input>
        <input type="submit" value={this.props.formType}></input>
      </form>
    )
  }
}

export default MessageForm