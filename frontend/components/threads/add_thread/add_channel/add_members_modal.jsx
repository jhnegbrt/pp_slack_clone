import React from 'react'
import Close from '../../../../../app/assets/images/close.svg'


class AddMembersModal extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      creatorId: props.newChannel.creatorId,
      title: props.newChannel.title,
      selectedUsers: props.newChannel.selectedUsers,
      newMember: "",
      suggestedUsers: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  matchedUser(user){
    return user.username.startsWith(this.state.newMember) && !this.state.selectedUsers.includes(user.id)
  }

  handleChange(e){
    let {users} = this.props
    if (this.state.selectedUser === null){
      this.setState({
        selectedUser: 0
      })
    }
    this.setState({
      newMember: e.target.value,
    }, ()=>{
      let suggestedUsers = Object.values(users).filter(user=>{return this.matchedUser(user)})
      this.setState({
        suggestedUsers: suggestedUsers
      })
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
    if (e.key === "ArrowUp"){
      e.preventDefault()
      if(this.state.selectedUser === null){
        this.setState({
          selectedUser: 0
        })
      } else {
        let index = this.state.selectedUser === 0 ? this.state.suggestedUsers.length -1 : (this.state.selectedUser-1) % this.state.suggestedUsers.length
        this.setState({
          selectedUser: index
        })
      }
    } else if (e.key === "ArrowDown"){
      e.preventDefault()
      if(this.state.selectedUser === null){
        this.setState({
          selectedUser: 0
        })
      } else {
        let index = (this.state.selectedUser+1) % this.state.suggestedUsers.length
        this.setState({
          selectedUser: index
        })
      }
    }
    if (["Enter", "Tab", ","].includes(e.key)){
      e.preventDefault()
      let newMember
      if (this.state.selectedUser === null){
        newMember = this.state.newMember.trim()
      } else {
        newMember = this.state.suggestedUsers[this.state.selectedUser].username
      }
      const {users} = this.props
      for (const key in users){
        if(users[key].username === newMember && !this.state.selectedUsers.includes(users[key].id))
        this.setState({
          selectedUsers: [...this.state.selectedUsers, users[key].id],
          newMember: ""
        })
      }
    }
  }

  sameUsers(threadUsers, stateUsers){
    let dictionary = {}
    threadUsers.forEach((id) =>{
      return dictionary[id] = 1
    })
    for (let i = 0; i < stateUsers.length; i++){
      if (dictionary[stateUsers[i]] === undefined){
        return false
      } else {
        dictionary[stateUsers[i]]--
      }
    }
    if (Object.values(dictionary).every((el)=> el === 0)){
      return true
    } else{
      return false
    }
  }

  checkUsers(dms, stateUsers){
    let match = null;
    for (let i = 0; i < dms.length; i++){
      let users = dms[i].users
      let sameUsers = this.sameUsers(users, stateUsers)
      if ( sameUsers ){
        return match = dms[i].id
      }
    }
    return match
  }

  handleMouseEnter(i){
    this.setState({
      selectedUser: i
    })
  }

  handleMouseLeave(){
    this.setState({
      selectedUser: null
    })
  }

  mapUser(user, i){
    return (
      <li 
        key={user.username} 
        id={this.state.selectedUser === i ? "selected-suggested" : null}
        onMouseEnter={()=>this.handleMouseEnter(i)}
        onMouseLeave={this.handleMouseLeave}>
          {user.username}
      </li>
    )
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
      users: this.state.selectedUsers,
      channel: this.props.newChannel.channel,
      private: this.props.newChannel.private,
      creator_id: this.props.newChannel.creator_id,
      title: this.state.title
    })
    this.props.closeModal()
  }

  handleClick(e){
    let userName = e.target.innerText
    const {users} = this.props
    for (const key in users){
      if(users[key].username === userName && !this.state.selectedUsers.includes(users[key].id)){
        this.setState({
          selectedUsers: [...this.state.selectedUsers, users[key].id],
          newMember: ""
        })
      }
    }
  }

  render(){
    const {users} = this.props
    const selectedUsers = this.state.selectedUsers

    const suggestedUsers = this.state.suggestedUsers.map((suggestedUser, i)=>{return this.mapUser(suggestedUser, i)})
    const suggestedUsersList = (
      <ul className="suggested-users-list" onClick={this.handleClick}>
        {suggestedUsers.length > 0 ? suggestedUsers : <li>No suggestions</li>}
      </ul>
    )

    let addMembers = <button className="add-members-button" onClick={this.handleSubmit}>Add Members</button>
    let skipForNow = <button className="skip-for-now" onClick={this.handleSubmit}>Skip for now</button>
    
    return(
      <div className="thread-modal-container">
        <div className="thread-modal">
          <div className="modal-select-users">
            <div className="users-label">
              <h3>Add People</h3>
                <div className="channel-title-container">
                  <h4>#{this.state.title}</h4>
                  <a onClick={this.props.closeModal}>
                    <img className="close-modal-button" src={Close}></img>
                  </a>
                </div>
                <ul className="channel-recipients-list">
                  {selectedUsers.map(id =>{
                    if( id !== this.props.currentUser){
                      return(
                      <li key={id}>
                      {users[id].username}
                      <a onClick={()=>this.removeUser(id)}><img className="remove-new-member-button" 
                      src={Close}></img></a></li>
                      )
                    }
                  })}
                  <input
                  autoFocus
                  className="new-channel-member-input"
                  value={this.state.newMember}
                  placeholder= {this.state.selectedUsers.length === 1 ? "Enter a username" :""}
                  onChange={this.handleChange}
                  onKeyDown={this.handleKeyDown}
                  />
                </ul>
                {this.state.newMember.length > 0 ? suggestedUsersList : ""}
                {this.state.selectedUsers.length === 1 ? skipForNow : addMembers}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddMembersModal