import React, {useState} from "react"
import { useSelector } from "react-redux"

export default () => {

  const publicChannels = useSelector(state => state.workspace.publicChannels)
  const users = useSelector(state => state.workspace.users)
  const threads = useSelector(state => state.workspace.threads)
  const [displaySearch, setDisplaySearch] = useState(false)
  const [searchEntry, setSearchEntry ] = useState("")

  function onClick(e){
    setDisplaySearch(true)
  }

  function onSubmit(e){
    e.preventDefault()
  }

  function handleChange(e){
    setSearchEntry(e.target.value)
  }

  let search = (
    <div className="client-search">
      <div className="search-wrapper">
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Start typing to search!" value={searchEntry} onChange={handleChange}></input>
        </form>
      </div>
    </div>
  )

  return(
    <div className="search-bar">
      <div 
        className="search-bar-button" 
        onClick={onClick}>{displaySearch ? "" : "Search for Direct Messages, Public Channels, or Joined Channels"}
      </div>
      {displaySearch ? search : ""}
    </div>
  )
}