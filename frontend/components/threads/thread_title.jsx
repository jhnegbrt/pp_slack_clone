import React from 'react'

class ThreadTitle extends React.Component{
  constructor(props){
    super(props)
    this.createTitle = this.createTitle.bind(this)
  }

  createTitle(){
    debugger

    let channelUsers = this.props.threads[this.props.currentThreadId].users.filter((id)=>{return id !== this.props.currentUserId})
    if(Object.keys(this.props.users).length === 0){
      return
    }
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
      <div>
        {title}
      </div>
    )
  }
}

export default ThreadTitle