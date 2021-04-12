import React from 'react'
import { Link } from 'react-router-dom'
import EditMessageFormContainer from './edit_message_form_container'

class MessageIndexItem extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      edit: false
    })

    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit(){
    this.setState({
      edit: !this.state.edit
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
      <div>
        <button onClick={this.toggleEdit}>Edit Message</button>
        <button onClick={() => App.cable.subscriptions.subscriptions[0].remove_message({ message: this.props.message.id})}>Delete</button>
      </div>
    )
    
    let date_time = new Date(this.props.message.time)
    let time = date_time.toLocaleTimeString()
    time = time.slice(0, time.length-6)

    const display = (

      
      <li className={this.props.message.sender_id === this.props.currentUserId ?
        "thread-message-current": "thread-message"
        }>
        <div className="name-time">
          <p>{this.props.message.sender}</p>
          <p>{time}</p>
        </div>
        

        <Link to={`/messages/${this.props.message.id}`}>{this.props.message.content}</Link>
        {this.props.message.sender_id === this.props.currentUserId ? buttons : null }
      </li>
    )

    return (
      this.state.edit ? edit : display 
    )
  }

}

export default MessageIndexItem