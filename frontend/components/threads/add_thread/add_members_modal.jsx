import React from 'react'
import Close from '../../../../app/assets/images/close.svg'


class AddMembersModal extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      creatorId: props.newChannel.creatorId,
      title: props.newChannel.title,
      selectedUsers: props.newChannel.selectedUsers,
      newMember: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    debugger
    this.setState({
      newMember: e.target.value
    })
  }

  removeUser(userId){
    let users = this.state.selectedUsers.filter(function(id){
      return id !== userId
    })
    this.setState({
      selectedUsers: users
    })
  }

  handleKeyDown(e){
    if (["Enter", "Tab", ","].includes(e.key)){
      e.preventDefault()
      let newMember = this.state.newMember.trim()
      const {users} = this.props
      for (const key in users){
        if(users[key].username === newMember  && !this.state.selectedUsers.includes(users[key].id))
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
    debugger
    subscriptions[index].speak({ 
      users: this.state.selectedUsers,
      channel: this.props.newChannel.channel,
      private: this.props.newChannel.private,
      creator_id: this.props.newChannel.creator_id,
      title: this.state.title
    })
    this.props.closeModal()
    // this.props.selectThread(this.props.thread.threadId)

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
                  {this.state.newMember === "" && this.state.selectedUsers.length === 1 ?
                  <li>Enter Username to add Member!</li> : ""
                  }
                  {selectedUsers.map(id =>{
                    if( id !== this.props.currentUser){
                      return <li key={id}>
                        {users[id].username}
                      <a onClick={()=>this.removeUser(id)}><img className="remove-new-member-button" 
                      src={Close}></img></a></li>
                    }
                  })}
                  <input
                  autoFocus
                  className="new-member-input"
                  value={this.state.newMember}
                  onChange={this.handleChange}
                  onKeyDown={this.handleKeyDown}
                  />
                </ul>
                <button onClick={this.handleSubmit}>Add Members!</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddMembersModal