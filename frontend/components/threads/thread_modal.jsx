import createMessagesConnection from './create_messages_connection'
// import CreateThreadModalContainer from './create_thread_form_container'
import React from 'react'


class ThreadModal extends React.Component{
  constructor(props){
    
    super(props)
    this.state = this.props.thread
    this.state.creator_id = this.props.creatorId
    this.selectUsers = this.selectUsers.bind(this)
  }

  selectUsers(e){
    let allUsers = e.target.options
    let selected = this.state.selectedUsers
    for (let i = 0; i < allUsers.length; i++){
      if (allUsers[i].selected && !selected.includes(allUsers[i].value)){
        selected.push(allUsers[i].value)
      } 
    }
    this.setState({
      selectedUsers: selected
    })
    this.updateTitle = this.updateTitle.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  componentDidMount(){
    this.props.fetchAllUsers()
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
      this.props.creatorId)
    
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
  }

  handleSubmit(e){
    
    e.preventDefault()
    this.props.submit(this.state)
      .then((thread) => this.helperFunction(thread)
      )
      .then(() => this.setState({
        title: "",
        selectedUsers: [],
      }))
    //redirect to this thread
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
          
          <div className="modal-header">
            {this.props.formType === "message" ? "New Direct Message" : "Create Channel"}
          </div>

            <label>
              Users
              <select multiple={true} value={this.state.selectedUsers} onChange={this.selectUsers}>
                {Object.values(users).map((user) => 
                <option key={user.id} value={user.id}>
                {user.username}
                </option>)}
              </select>
            </label>

            <div>
              <h2>To:</h2>
              <ul>
                {selectedUsers.map(id =>{
                  return <li key={id}>{users[id].username}</li>
                }
                )}
              </ul>
            </div>

            <div>
              <form onSubmit = {this.handleSubmit}>
                <input onChange = {this.updateTitle}
                  placeholder={"Channel Title"}
                  type="text"
                  value={this.state.title}></input>
                <input type="submit" value="Create!"></input>
              </form>
            </div>
            {/* <div>
              <CreateThreadFormContainer 
                selectedUsers={this.state.selectedUsers}
                closeModal = {this.props.closeModal}
                thread={this.state}/>
            </div> */}
          </div>
      </div>
    )
  }
}

export default ThreadModal