import createMessagesConnection from '../../../util/create_messages_connection'
import React from 'react'


class NewChannelModal extends React.Component{
  constructor(props){
    
    super(props)
    //I am pretty sure that I can remove line 11 and just set creator_id in state
    //would require changing the way state is passed in from the container
    this.state = this.props.thread
    this.state.creator_id = this.props.creatorId
  }

  updateTitle(e){
    this.setState({
      title: e.target.value
    })
  }

  helperFunction(thread){
    createMessagesConnection(
      thread.threadId,
      this.props.receiveMessage,
      this.props.receiveMessages,
      this.props.removeMessage,
      this.props.creatorId
    )
    
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
      thread: thread.threadId,
      users: this.state.selectedUsers,
      channel: this.props.thread.channel,
      private: this.props.thread.private,
      creator_id: this.props.creatorId,
      title: this.state.title
    })

    this.props.selectThread(this.props.thread.threadId)
  }

  handleSubmit(e){
    
    e.preventDefault()
      this.helperFunction(this.state)
      .then(() => this.setState({
        title: "",
        selectedUsers: [],
      }))
      .then(() => this.props.toggleModal("addMembers"))
  }


  render(){
    const {users} = this.props
    const selectedUsers = this.state.selectedUsers
    return(
      <div className="thread-modal-container">
        <div className="thread-modal">
          <div className="thread-close">
            <button onClick={this.props.closeModal}>Close</button>
          </div>
          
          <div className="modal-header">Create Channel</div>
          <div className="modal-select-users">
            <div className="users-label">
              Select Users:
              <select className="modal-select" value={this.state.selectedUsers} onChange={this.selectUsers}>
                {Object.values(users).map((user) => 
                <option key={user.id} value={user.id}>
                {user.username}
                </option>)}
              </select>
            </div>

            <div className="recipients-list">
              <h2>To:</h2>
              <ul>
                {selectedUsers.map(id =>{
                  return <li key={id}>{users[id].username}</li>
                }
                )}
              </ul>
            </div>
          </div>
            <div className="create-thread">
              <form onSubmit = {this.handleSubmit}>
                <input onChange = {this.updateTitle}
                  placeholder={"Channel Title"}
                  type="text"
                  value={this.state.title}></input>
                <input type="submit" value="Create!"></input>
              </form>
            </div>
          </div>
      </div>
    )
  }
}

export default NewChannelModal