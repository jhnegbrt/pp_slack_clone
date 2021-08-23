import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {joinChannel} from "../../util/action_cable_util/channel_util"

export default ({thread, setSearchEntry, setDisplaySearch}) => {

  const currentUserId = useSelector(state => state.session.id)

  function handleClick(){
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