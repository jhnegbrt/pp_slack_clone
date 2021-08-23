import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from "react-router-dom"
import { createThread } from "../../actions/thread_actions"

export default ({user, setSearchEntry, setDisplaySearch}) =>{

  const history = useHistory()
  const threads = useSelector(state => Object.values(state.workspace.threads))
  const currentUserId = useSelector(state => state.session.id)
  const dispatch = useDispatch()
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

  function createDirectMessage(){
    let newDirectMessage = { 
      channel: false,
      private: true,
      creator_id: currentUserId,
      title: "placeholder",
    }
    dispatch(createThread(newDirectMessage, [currentUserId, user.id]))
      .then(action => history.push(`/client/${action.threadId}`))
    setDisplaySearch(false)
    setSearchEntry("")
  }

  return(
    activeThread ? 
    <Link className="thread-search-user" onClick={handleClick} to={`${activeThread}`}>{user.username}</Link> : 
    <a className="thread-search-user" onClick={createDirectMessage}>{user.username}</a>
  )
}