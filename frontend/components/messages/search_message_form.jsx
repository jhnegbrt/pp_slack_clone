import React from 'react'
import { useHistory } from "react-router-dom"; 

class SearchMessageForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      content: "",
      private: true,
      channel: false,
      creatorId: this.props.currentUserId
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateContent = this.updateContent.bind(this)
    this.createNewDirectMessage = this.createNewDirectMessage.bind(this)
  }

  //not sure if i need this method, coming from message_form
  //this method is making sure that the wildcard in the URL matches the currentTHread
  // in state. If I do end up needing it, I can change currentThreadId to searchThread


  // componentDidUpdate(){
  //   if (this.props.formType === "Edit Message"){
  //     return
  //   } else if (this.state.channel_dms_id !== parseInt(this.props.currentThreadId)){
  //     this.setState({
  //       channel_dms_id: parseInt(this.props.currentThreadId)
  //     })
  //   } 
  // };

  //this message sends a new message to a thread that already exists if the user is 
  //sending a message to users who they are already in a dm with

  sendMessage(){

    let subscriptions = App.cable.subscriptions.subscriptions
    let index;
    for (let i = 0; i < subscriptions.length; i++){
      let identifier = JSON.parse(subscriptions[i].identifier)
      if (identifier.channel === "ChatChannel"){
        index = i
        break
      }
    }
    
    App.cable.subscriptions.subscriptions[index].speak({ message: this.state})
    this.setState({
        content: ""
    })

  }



  //this method creates a new DM if the user sends a message to a group or individual 
  //that they do not yet have a dm with
  createNewDirectMessage(e){
    e.preventDefault()
    let newDirectMessage = { 
      users: this.props.selectedUsers,
      channel: false,
      private: true,
      creator_id: this.state.creatorId,
      title: "replace this with users names",
      first_message: "xx"
    }
    let id;
    this.props.createDirectMessage(newDirectMessage)
    .then((res) => {
      debugger
      id = res;
      let subscriptions = App.cable.subscriptions.subscriptions
      let index;
      for (let i = 0; i < subscriptions.length; i++){
        let identifier = JSON.parse(subscriptions[i].identifier)
        if (identifier.channel === "ThreadChannel"){
          index = i
          break
        }
      }
      subscriptions[index].speak({
        created: true,
        id: res.threadId,
        users: this.props.selectedUsers,
        channel: false,
        private: true,
        creator_id: this.state.creatorId,
        title: "replace this with users names"
      })

      for (let i = 0; i < subscriptions.length; i++){
        let identifier = JSON.parse(subscriptions[i].identifier)
        if (identifier.channel === "ChatChannel"){
          index = i
          break
        }
      }
      let message = {
        channel_dms_id: res.threadId,
        content: this.state.content,
        sender_id: this.state.creatorId,
        created: true
      }
      subscriptions[index].speak({ message: message})
      this.props.history.push(`/client/thread/${res.threadId}`)
    })
    
  }

  //creatorId and users are still undefined


  handleSubmit(e){
    e.preventDefault()
    // if (this.props.searchDmId === null){
    this.createNewDirectMessage(e)
    // this.props.selectThread(this.props.thread.threadId)
    // } else {
    //   sendMessage()
    // // this.props.selectThread(this.props.thread.threadId)
    // }
  }

  updateContent(e){
    this.setState({
      content: e.target.value
    })
  }


  render(){
    debugger
    return(
      <form className="message-form" onSubmit={this.handleSubmit}>
        <input onChange={this.updateContent} 
          type="text" 
          placeholder="New Message Here!"
          value={this.state.content}></input>
        <input type="submit" value="Send"></input>
      </form>
    )
  }
}

export default SearchMessageForm