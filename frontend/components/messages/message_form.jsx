import React from 'react'

class MessageForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.message
    this.state.sender_id = this.props.senderId

    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateContent = this.updateContent.bind(this)
  }

  handleSubmit(e){
    // debugger
    e.preventDefault()
    this.props.submit(this.state)
    if (this.props.formType === "Send"){
      this.setState({
        content: ""
      })
    } else {
      this.props.toggleEdit()
    }
  }

  updateContent(e){
    this.setState({
      content: e.target.value
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.updateContent} type="text" placeholder="SEND MESSAGE" value={this.state.content}></input>
        <input type="submit" value={this.props.formType}></input>
      </form>
    )
  }
}

export default MessageForm