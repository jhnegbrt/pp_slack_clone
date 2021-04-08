import React from 'react'
import { Link } from 'react-router-dom'

const MessageIndexItem = props => (
  <li>
    <Link to={`/messages/${props.message.id}`}>{props.messages.content}</Link>
    <Link to={`/messages/${props.message.id}/edit`}>Edit</Link>
    <button onClick={() => props.deleteMessage(props.message.id)}>Delete</button>
  </li>
)

export default MessageIndexItem