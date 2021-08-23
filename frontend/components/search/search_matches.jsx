import React from "react"
import {Link} from "react-router-dom"
import PublicChannelItem from './public_channel_item'

export default ({type, entities, query, setDisplaySearch, setSearchEntry}) => {

  function matchClick(){
    setSearchEntry("")
    setDisplaySearch(false)
  }

  function matchThreads(){
    let threads = Object.values(entities)
    let matchedThreads = []
    for (let i = 0; i < threads.length; i++){
      let regex = new RegExp(`${query}`, 'i')
      let title = threads[i].title
      if (regex.test(title) && title != "placeholder"){
        matchedThreads.push(
          <Link 
            onClick={matchClick}
            to={`${threads[i].id}`}>
              {threads[i].title}
          </Link>
        )
      }
    }
    return (
      matchedThreads.length > 0 ? matchedThreads :
      <div className="no-search-results">No Threads Found!</div>
    )  
  }

  function matchPublicChannels(){
    let publicChannels = Object.values(entities)
    let  matchedPublicChannels = []
    for (let i = 0; i < publicChannels.length; i++){
      let regex = new RegExp(`${query}`, 'i')
      if (regex.test(publicChannels[i].title)){
        matchedPublicChannels.push(
          <PublicChannelItem 
            thread={publicChannels[i]}
            setSearchEntry={setSearchEntry}
            setDisplaySearch={setDisplaySearch}/>
        )
      }
    }
    return (
      matchedPublicChannels.length > 0 ? matchedPublicChannels :
      <div className="no-search-results">No Public Channels Found!</div>
    ) 
  }

  function matchUsers(){
    let users = Object.values(entities)
    let matchedUsers = []
    for (let i = 0; i < users.length; i++){
      let regex = new RegExp(`${query}`, 'i')
      if (regex.test(users[i].username)){
        matchedUsers.push(<div>{users[i].username}</div>)
      }
    }
    return (
      matchedUsers.length > 0 ? matchedUsers :
      <div className="no-search-results">No Users Found!</div>
    ) 
  }

  function findMatches(){
    if (query.length < 1){
      return
    } else {
      switch(type){
        case "threads":
          return matchThreads()
        case "publicChannels":
          return matchPublicChannels()
        case "users":
          return matchUsers()
      }
    }
  }

  return(
    <div>{findMatches()}</div>
  )
}