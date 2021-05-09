import React from 'react'

class AddMembersModal extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      creatorId: props.newChannel.creatorId,
      private: props.newChannel.private,
      channel: props.newChannel.channel,
      title: props.newChannel.title,
      selectedUsers: props.newChannel.selectedUsers,
      newMember: ""
    }
    this.selectUsers = this.selectUsers.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    debugger
    this.setState({
      newMember: e.target.value
    })
  }

  handleKeyDown(e){
    if (["Enter", "Tab", ","].includes(e.key)){
      e.preventDefault()
      let newMember = this.state.newMember.trim()
      const {users} = this.props
      for (const key in users){
        if(users[key].username === newMember)
        this.setState({
          selectedUsers: [...this.state.selectedUsers, users[key].id],
          newMember: ""
        })
      }
    }
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
      channel: this.props.newChanne.channel,
      private: this.props.newChannel.private,
      creator_id: this.props.newChannel.creatorId,
      title: this.state.newChannel.title
    })
    this.props.selectThread(this.props.thread.threadId)

  }

  render(){
    const {users} = this.props
    const selectedUsers = this.state.selectedUsers
    debugger
    return(
      <div className="thread-modal-container">
        <div className="thread-modal">
          <div className="modal-select-users">
            <div className="users-label">
              Add Users:
                <ul className="recipients-list">
                  {selectedUsers.map(id =>{
                    return <li key={id}>{users[id].username}</li>
                  })}
                </ul>
              <input
                placeholder="enter username to add and press `Enter`"
                value={this.state.newMember}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
              />
            </div>

            <div className="recipients-list">
              <ul>
                {selectedUsers.map(id =>{
                  return <li key={id}>{users[id].username}</li>
                })}
              </ul>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default AddMembersModal