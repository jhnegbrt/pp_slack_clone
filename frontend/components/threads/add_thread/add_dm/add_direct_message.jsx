import React from 'react'
import ThreadDisplayContainer from '../../../threads/thread_display_container'

class AddDirectMessage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      //add current user into selectedUsers
      selectedUsers: [],
      newMember: "",
      currentDm: null
    }
    this.handleChange = this.handleChange.bind(this)
    debugger
  }

  handleChange(e){
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

  componentDidUpdate(){
    let {threads} = this.props
    for (let i = 0; i < threads.length; i++){
      let users = threads[i].users
      let sameUsers = this.sameUsers(users, this.state.selectedUsers)
      if ( sameUsers ){
        if(threads[i].id != this.state.currentDm){
          this.setState({
            currentDm: threads[i].id
          })
          break
        }
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
    return(
      <div>Add Direct Message</div>
    )
  }
}

export default AddDirectMessage