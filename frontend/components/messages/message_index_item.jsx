import React from 'react'
import { Link } from 'react-router-dom'

class MessageIndexItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <li>
        <Link to={`/messages/${this.props.message.id}`}>{this.props.message.content}</Link>
        <Link to={`/messages/${this.props.message.id}/edit`}>Edit</Link>
        <button onClick={() => this.props.deleteMessage(this.props.message.id)}>Delete</button>
      </li>
    )
  }

}

export default MessageIndexItem