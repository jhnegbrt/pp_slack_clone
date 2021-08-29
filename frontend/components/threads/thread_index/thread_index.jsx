import React from 'react'
import ThreadIndexItemContainer from './thread_index_item_container'
import createThreadsConnection from '../../../util/action_cable_util/create_threads_connection'
import AddChannelButton from './add_channel_button'
import ThreadIndexHeader from './thread_index_header'
import { faCaretDown, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'


class ThreadIndex extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      showChannels: true,
      showDms: true
    })
    this.toggleDropDown = this.toggleDropDown.bind(this)
    this.addConversation = this.addConversation.bind(this)
  }

  componentDidMount(){
    this.props.fetchAllUsers()
    const {currentUserId, receiveThread, receiveThreads, removeThread} = this.props
    createThreadsConnection(currentUserId, receiveThread, receiveThreads, removeThread)
  }

  //I Believe that I do not need to pass in "threadId"
  mapChannels(thread){
    if(thread.channel === true){
      return <ThreadIndexItemContainer thread={thread} key={thread.id} threadId={thread.channel_dms_id}/>
    }
  }

  mapDirectMessages(thread){
    if(thread.channel === false){
      return <ThreadIndexItemContainer thread={thread} key={thread.id} threadId={thread.channel_dms_id}/> 
    }
  }

  toggleDropDown(thread){
    this.setState({
      [thread]: !this.state[thread]
    })
  }

  addConversation(e){
    e.stopPropagation()
    this.props.history.push('/client/add')
  }

  render(){
    const { threads } = this.props
    const dmIndex = (
      <div>
        <ul className="dm-index">
          {
            threads.map(this.mapDirectMessages)
          }
        </ul>
        <div onClick={this.addConversation} className="create-channel">
          <FontAwesomeIcon className="plus-sign" icon={faPlusSquare} />
          <a>New Conversation</a>
        </div>
      </div>
    )
    const channelIndex = (
      <div>
        <ul className="channel-index">
          {
            threads.map(this.mapChannels)
          }
        </ul>
        <AddChannelButton toggleModal={this.props.toggleModal} />
      </div>
    )
    return(
      <div className="thread-index-container">
        <ThreadIndexHeader />
        <div className="thread-index">
          <div className="header-caret-container" >
            <FontAwesomeIcon onClick={()=>this.toggleDropDown("showChannels")}  className={this.state.showChannels ? "caret" : "caret close-caret"} icon={faCaretDown}/>
            <h3 onClick={()=>this.toggleDropDown("showChannels")} className="channels-header">Channels</h3>
          </div>
          {this.state.showChannels ? channelIndex : ""}
          <div className="header-caret-container" >
            <FontAwesomeIcon onClick={()=>this.toggleDropDown("showDms")} className={this.state.showDms ? "caret" : "caret close-caret"} icon={faCaretDown}/>
            <h3 onClick={()=>this.toggleDropDown("showDms")} className="messages-header">Messages</h3>
          </div>
          {this.state.showDms ? dmIndex : ""}
          <Link className="leave-app" to='/'>Leave App</Link>
        </div>
      </div>
    )
  }
}

export default ThreadIndex