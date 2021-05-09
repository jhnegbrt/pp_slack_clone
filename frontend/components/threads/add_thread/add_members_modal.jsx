import React from 'react'

class AddMembersModal extends React.Component{
  constructor(props){
    super(props)

    this.selectUSers = this.selectedUsers.bind(this)
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

  handleSubmit(e){
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
      thread: thread.threadId,
      users: this.state.selectedUsers,
      channel: this.props.thread.channel,
      private: this.props.thread.private,
      creator_id: this.props.creatorId,
      title: this.state.title
    })
    this.props.selectThread(this.props.thread.threadId)

  }

  render(){
    const {users} = this.props
    const selectedUsers = this.state.selectedUsers
    return(
      <div className="add-members-modal">
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
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AddMembersModal