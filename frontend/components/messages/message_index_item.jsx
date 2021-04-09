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
        <button onClick={() => this.props.deleteMessage(this.props.message.id)}>Delete</button>
      </div>
    )

    const display = (
      <li>
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