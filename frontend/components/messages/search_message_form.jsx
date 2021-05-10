import React from 'react'

class SearchMessageForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      content: "",
      private: true,
      channel: false,
      selectedUsers: this.props.selectedUsers,
      creatorId: this.props.currentUserId
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateContent = this.updateContent.bind(this)
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

  createNewDirectMessage(){
    e.preventDefault()
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
      users: this.state.selectedUsers,
      channel: this.props.newChannel.channel,
      private: this.props.newChannel.private,
      creator_id: this.props.newChannel.creator_id,
      title: this.state.title
    })
  }


  handleSubmit(e){
    e.preventDefault()
    if (this.props.searchDmId === null){
      createNewDirectMessage()
    // this.props.selectThread(this.props.thread.threadId)
    } else {
      sendMessage()
    // this.props.selectThread(this.props.thread.threadId)
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