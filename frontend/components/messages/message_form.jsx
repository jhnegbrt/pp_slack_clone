import React from 'react'

class MessageForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.message
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateContent = this.updateContent.bind(this)
  }

  componentDidUpdate(){
    if (this.props.formType === "Edit Message"){
      return
    } else if (this.state.channel_dms_id !== parseInt(this.props.currentThreadId)){
      this.setState({
        channel_dms_id: parseInt(this.props.currentThreadId)
      })
    } 
  };


  handleSubmit(e){
    e.preventDefault()
    if (this.props.formType === "Edit Message"){
      App.cable.subscriptions.subscriptions[0].update({ message: this.state})
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
      <form className="message-form" onSubmit={this.handleSubmit}>
        <input onChange={this.updateContent} 
          type="text" 
          placeholder="Message"
          value={this.state.content}></input>
        <input type="submit" value={this.props.formType === "Edit Message" ? "Save" : this.props.formType}></input>
      </form>
    )
  }
}

export default MessageForm