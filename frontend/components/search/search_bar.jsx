import React from "react"
import { useSelector } from "react-redux"

export default () => {

  const publicChannels = useSelector(state => state.workspace.publicChannels)
  const users = useSelector(state => state.workspace.users)
  const threads = useSelector(state => state.workspace.threads)

  debugger
  
  return(
    <div className="search-bar">Our Search Bar</div>
  )
}