import React from 'react'
import { Link } from 'react-router-dom'
import EditMessageFormContainer from './edit_message_form_container'

class MessageIndexItem extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      editting: false,
      hover: false

    })

    this.toggleEdit = this.toggleEdit.bind(this)
    this.toggleHover = this.toggleHover.bind(this)
  }

  toggleEdit(){
    this.setState({
      editting: !this.state.edit
    })
  }

  toggleHover(){
    debugger
    this.setState({
      hover: !this.state.hover
    })
  }

  render(){
    debugger
    const edit = (
      <li>
        <EditMessageFormContainer toggleEdit={this.toggleEdit} id={this.props.message.id}></EditMessageFormContainer>
      </li>
    )

    const buttons = (
      <div className="message-buttons">
        <button onClick={this.toggleEdit}>Edit</button>
        <button onClick={() => App.cable.subscriptions.subscriptions[0].remove_message({ message: this.props.message.id})}>Delete</button>
      </div>
    )
    
    let date_time = new Date(this.props.message.time)
    let time = date_time.toLocaleTimeString()
    time = time.slice(0, time.length-6)

    const display = (
      <div 
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        className={this.props.message.sender_id === this.props.currentUserId ?
        "thread-message-current": "thread-message"}>
          {this.props.previous == undefined || this.props.message.sender_id !== this.props.previous.sender_id ? <span>{this.props.message.sender}</span> : null}
          <span>{time}</span>
          <p><Link to={`/messages/${this.props.message.id}`}>{this.props.message.content}</Link></p>
          {this.props.message.sender_id === this.props.currentUserId 
          && this.state.hover === true ? 
          buttons : null }
      </div>
    )

    return (
      this.state.edit ? edit : display 
    )
  }

}

export default MessageIndexItem