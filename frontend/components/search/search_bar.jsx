import React from "react"
import { useSelector } from "react-redux"

export default () => {

  const publicChannels = useSelector(state => state.workspace.publicChannels)
  const users = useSelector(state => state.workspace.users)
  const threads = useSelector(state => state.workspace.threads)

  function onSubmit(e){
    e.preventDefault()
  }

  return(
    <div className="search-bar">
      <div className="search-bar-button">Search for Direct Messages, Public Channels, or Joined Channels</div>
    </div>
  )
}