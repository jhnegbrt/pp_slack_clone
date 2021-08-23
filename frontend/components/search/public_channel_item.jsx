import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {joinChannel} from "../../util/action_cable_util/join_channel"

export default ({thread, setSearchEntry, setDisplaySearch}) => {

  const currentUserId = useSelector(state => state.session.id)

  // function findThreadChannel(){
  //   let index;
  //   let subscriptions = App.cable.subscriptions.subscriptions
  //   for (let i = 0; i < subscriptions.length; i++){
  //     let identifier = JSON.parse(subscriptions[i].identifier)
  //     if (identifier.channel === "ThreadChannel"){
  //       index = i
  //       break
  //     }
  //   }
  //   return index
  // }

  // function joinChannel(){
  //   let subscriptions = App.cable.subscriptions.subscriptions
  //   let index = findThreadChannel()
  //   subscriptions[index].speak({
  //     created: true,
  //     id: thread.id,
  //     users: [currentUserId],
  //     channel: true,
  //     private: false,
  //     title: thread.title,
  //     creator_id: thread.creator_id
  //   })
  // }

  function handleClick(){
    debugger
    joinChannel(thread, currentUserId)
    setSearchEntry("")
    setDisplaySearch(false)
  }

  return(
    <div>
      {thread.title}
      <Link 
        onClick={handleClick} 
        to={`${thread.id}`}>
          Join
      </Link>
    </div>
  )
}