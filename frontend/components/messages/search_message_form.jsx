import React from 'react'

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

    let message = {
      channel_dms_id: this.props.searchDmId,
      content: this.state.content,
      sender_id: this.state.creatorId,
      created: true
    }
    
    App.cable.subscriptions.subscriptions[index].speak({ message: message})
    this.setState({
        content: ""
    })
    this.props.history.push(`/client/${this.props.searchDmId}`)
  }

  // this method creates a new DM if the user sends a message to a group or individual 
  // that they do not yet have a dm with

  // createNewDirectMessage(){
  //   let {selectedUsers} = this.props
  //   let {content} = this.state
  //   let newDirectMessage = { 
  //     channel: false,
  //     private: true,
  //     creator_id: this.state.creatorId,
  //     title: "placeholder",
  //   }
  //   this.props.createThread(newDirectMessage, selectedUsers, content)
  //     .then(action => {
  //       this.props.history.push(`/client/${action.threadId}`)
  //       window.location.reload(false)
  //     })
  // }

  // Hotfix for issue of first message not rendering

  createNewDirectMessage(e){
    e.preventDefault()
    let newDirectMessage = { 
      users: this.props.selectedUsers,
      channel: false,
      private: true,
      creator_id: this.state.creatorId,
      title: "placeholder",
    }
    let id;
    this.props.createDirectMessage(newDirectMessage)
    .then((res) => {
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
        title: "placeholder"
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
      this.props.history.push(`/client/${res.threadId}`)
    })
    
  }

  

  handleSubmit(e){
    e.preventDefault()
    if (this.props.searchDmId === null){
      this.createNewDirectMessage(e)
    } else {
      this.sendMessage()
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
          placeholder="New Message Here!"
          value={this.state.content}></input>
        <input type="submit" value="Send"></input>
      </form>
    )
  }
}

export default SearchMessageForm