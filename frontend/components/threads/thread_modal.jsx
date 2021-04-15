import React from 'react'

class ThreadModal extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selectedUsers: [],
      newMessage: ""
    }
    this.selectUsers = this.selectUsers.bind(this)
  }

  selectUsers(e){
    let allUsers = e.target.options
    let selected = this.state.selectedUsers
    for (let i = 0; i < allUsers.length; i++){
      if (allUsers[i].selected && !selected.includes(allUsers[i].value)){
        selected.push(allUsers[i].value)
      } 
      // else if (allUsers[i].selected){
      //   selected = selected.filter(el => el !== allUsers[i].value)
      // }
    }
    this.setState({
      selectedUsers: selected
    })

    this.updateMessage = this.updateMessage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  componentDidMount(){
    this.props.fetchAllUsers()
  }

  updateMessage(e){
    this.setState({
      newMessage: e.target.value
    })
  }

  handleSubmit(){

  }

  render(){
    const {users} = this.props
    const selectedUsers = this.state.selectedUsers
    return(
      <div className="thread-modal-container">
        <div className="thread-modal">
          <div className="thread-close">
            <button onClick={()=>this.props.toggleModal(this.props.formType)}>Close</button>
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
                  debugger
                  return <li key={id}>{users[id].username}</li>
                }
                )}
              </ul>
            </div>

            <div>
              <form onSubmit={this.handleSubmit}>
                <input onChange = {this.updateMessage}
                  type="text"
                  value={this.state.newMessage}></input>
                <input type="submit" value="Send!"></input>
              </form>
            </div>
          </div>
      </div>
    )
  }
}

export default ThreadModal