import React, {useState, useEffect} from "react"
import { useSelector } from "react-redux"
import SearchMatches from './search_matches'

export default () => {

  const users = useSelector(state => state.workspace.users)
  const threads = useSelector(state => state.workspace.threads)
  const publicChannels = useSelector(state => {
    let threads = state.workspace.threads
    return Object.values(state.workspace.publicChannels).filter(el => threads[el.id] === undefined)
  })
  const [displaySearch, setDisplaySearch] = useState(false)
  const [searchEntry, setSearchEntry ] = useState("")

  const searchBox = React.createRef()

  function handleClickOutside(e){
    if (searchBox.current && !searchBox.current.contains(e.target)) {
      setDisplaySearch(false)
      setSearchEntry("")
    }
  }

  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutside)
    return function(){
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  function onClick(e){
    setDisplaySearch(true)
  }

  function onSubmit(e){
    e.preventDefault()
  }

  function handleChange(e){
    setSearchEntry(e.target.value)
  }

  let matches = (
    <div>
      <div className="match-header">Users:
        <SearchMatches 
          setSearchEntry={setSearchEntry}
          setDisplaySearch={setDisplaySearch} 
          query={searchEntry} 
          type="users" 
          entities={users}/>
      </div>
      <div className="match-header">Threads:
        <SearchMatches 
          setSearchEntry={setSearchEntry}
          setDisplaySearch={setDisplaySearch} 
          query={searchEntry} 
          type="threads" 
          entities={threads}/>
      </div>
      <div className="match-header">Public Channels:
        <SearchMatches
          setSearchEntry={setSearchEntry}
          setDisplaySearch={setDisplaySearch} 
          query={searchEntry} 
          type="publicChannels" 
          entities={publicChannels}/>
      </div>
    </div>
  )

  let search = (
    <div className="client-search" ref={searchBox}>
      <div className="search-wrapper">
        <form onSubmit={onSubmit}>
          <input type="text" autoFocus={true} placeholder="Start typing to search!" value={searchEntry} onChange={handleChange}></input>
        </form>
      </div>
      {searchEntry.length > 0 ? matches : <div className="awaiting-result">waiting for query...</div>}
    </div>
  )

  return(
    <div className="search-bar">
      <div 
        className="search-bar-button" 
        onClick={onClick}>{displaySearch ? "" : "Search for Users, Active Threads, or Public Channels"}
      </div>
      {displaySearch ? search : ""}
    </div>
  )
}