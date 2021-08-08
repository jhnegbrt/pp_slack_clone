import React from 'react'
import MessageIndexContainer from '../../../messages/message_index_container'
import Close from '../../../../../app/assets/images/close.svg'

class AddDirectMessage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selectedUsers: [props.currentUser],
      newMember: "",
      currentDm: null,
      selectedUser: 0,
      suggestedUsers: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    this.props.fetchAllUsers()
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
        if(users[key].username === newMember && !this.state.selectedUsers.includes(users[key].id)){
          this.setState({
            selectedUsers: [...this.state.selectedUsers, users[key].id],
            newMember: ""
          })
        }
      }
    }
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

  componentDidUpdate(){

    let {threads} = this.props
    let dms = threads.filter((el) => { return el.channel === false})
    let match = this.checkUsers(dms, this.state.selectedUsers)
    
    if (this.state.currentDm !== match){
      this.setState({
        currentDm: match
      })
    }
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


  render(){
    const {users} = this.props
    const selectedUsers = this.state.selectedUsers
    const suggestedUsers = this.state.suggestedUsers.map((suggestedUser, i)=>{return this.mapUser(suggestedUser, i)})
    const suggestedUsersList = (
      <ul className="suggested-users-list" onClick={this.handleClick}>
        {suggestedUsers.length > 0 ? suggestedUsers : <li>No suggestions</li>}
      </ul>
    )
    return(
      <div className="add-dm-container">
        <div className="add-dm-header">
          <h2>New Direct Message</h2>
        </div>
        <div className="add-dm">
          <h2>To:</h2>
          <ul className="dm-recipients-list">
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
            placeholder= {this.state.selectedUsers.length === 1 ? "Enter a username" :""}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            />
          </ul>
        </div>
        {this.state.newMember.length > 0 ? suggestedUsersList : ""}
        <MessageIndexContainer 
        searchDmId={this.state.currentDm}
        selectedUsers={this.state.selectedUsers} />
      </div>
    )
  }
}

export default AddDirectMessage