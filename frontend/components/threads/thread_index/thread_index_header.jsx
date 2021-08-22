import React from "react"
import { useSelector } from "react-redux"

export default () => {
  const currentUser = useSelector(state => state.entities.users[state.session.id])
  return(
    <div className="thread-header">{currentUser.username}</div>
  )
}