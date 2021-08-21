import React from 'react'

class ThreadTitle extends React.Component{
  constructor(props){
    super(props)
    this.createTitle = this.createTitle.bind(this)
  }

  createTitle(){
    if(Object.keys(this.props.users).length === 0 || Object.keys(this.props.threads).length === 0){
      return
    }
    
    let currentThread = this.props.threads[this.props.currentThreadId]

    if(currentThread === undefined){
      return ""
    }

    if (currentThread.channel === true ){
      return currentThread.title
    }
    let channelUsers = currentThread.users.filter((id)=>{return id !== this.props.currentUserId})
    let allUsers = this.props.users
    let userNames = []
    channelUsers.forEach((id)=>{
      return userNames.push(allUsers[id].username)
    })
    let title = userNames.join(", ")
    if (title.length > 55){
      return title.slice(0, 55).concat("...")
    } else {
      return title.slice(0, title.length)
    }
  }


  render(){
    const title = this.createTitle()
    return(
      <div className="thread-title">
        <h2>{title}</h2>
      </div>
    )
  }
}

export default ThreadTitle