import React from "react"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

export default ({user, setSearchEntry, setDisplaySearch}) =>{

  const threads = useSelector(state => Object.values(state.workspace.threads))

  let activeThread = false

  for (let i = 0; i < threads.length; i++){
    if(threads[i].users.length === 2 && threads[i].users.includes(user.id)){
      activeThread = threads[i].id
      break
    }
  }
  
  function handleClick(){
    setDisplaySearch(false)
    setSearchEntry("")
  }

  return(
    activeThread ? 
    <Link onClick={handleClick} to={`${activeThread}`}>{user.username}</Link> : ""
  )
}