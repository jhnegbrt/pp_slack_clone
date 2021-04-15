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
    this.hovering = this.hovering.bind(this)
    this.notHovering = this.notHovering.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  toggleEdit(){
    this.setState({
      editting: !this.state.editting
    })

  }

  hovering(){
    if(this.state.hover === false){
      this.setState({
        hover: true
      })
    }
  }

  notHovering(){
    if(this.state.hover === true){
      this.setState({
        hover: false
      })
    }
  }

  onDelete(){

    let subscriptions = App.cable.subscriptions.subscriptions
    let index;
    for (let i = 0; i < subscriptions.length; i++){
      let identifier = JSON.parse(subscriptions[i].identifier)
      if (identifier.channel === "ChatChannel"){
        index = i
        break
      }
    }
  
    subscriptions[index].remove_message({ message: this.props.message.id})

  }

  render(){
    const edit = (
      <li>
        <EditMessageFormContainer editting={this.state.editting} toggleEdit={this.toggleEdit} id={this.props.message.id}></EditMessageFormContainer>
      </li>
    )

    const buttons = (
      <div className="message-buttons">
        <button onClick={this.toggleEdit}>Edit</button>
        <button onClick={this.onDelete}>Delete</button>
      </div>
    )
    
    let date_time = new Date(this.props.message.time)
    let time = date_time.toLocaleTimeString()
    time = time.slice(0, time.length-6)
    
    let time_diff;
    
    if(this.props.previous === undefined){
      time_diff = 6001
    } else {
      let prev_time = new Date(this.props.previous.time)
      time_diff = Date.parse(date_time) - Date.parse(prev_time)
    }

    let new_user;
    
    if (this.props.previous == undefined || 
      this.props.message.sender_id !== this.props.previous.sender_id){
      new_user = true
    } else {
      new_user = false
    }
    
    const display = (
      <div 
        onMouseEnter={this.hovering}
        onMouseLeave={this.notHovering}
        className={this.props.message.sender_id === this.props.currentUserId ?
        "message-current": "message"}>
          {new_user === true ? <span className="message-name">{this.props.message.sender}</span> : null}
          {time_diff > 18000 || new_user === true ? <span className="message-time">{time}</span> : null}
          <p><Link to={`/messages/${this.props.message.id}`}>{this.props.message.content}</Link></p>
          {this.props.message.sender_id === this.props.currentUserId
          && this.state.hover === true ? 
          buttons : null }
      </div>
    )

    return (
      this.state.editting ? edit : display 
    )
  }

}

export default MessageIndexItem