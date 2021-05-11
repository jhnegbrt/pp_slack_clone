import React from 'react'
import ThreadIndexItemContainer from './thread_index_item_container'
import createThreadsConnection from '../../util/create_threads_connection'
import AddChannelButton from './add_channel_button'
import {Link} from 'react-router-dom'

class ThreadIndex extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      showChannels: true,
      showDms: true
    })
    this.toggleDropDown = this.toggleDropDown.bind(this)
  }

  componentDidMount(){
    this.props.fetchAllUsers()
    const {currentUserId, receiveThread, receiveThreads} = this.props
    createThreadsConnection(currentUserId, receiveThread, receiveThreads)

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
    debugger
    this.setState({
      [thread]: !this.state[thread]
    })
  }

  render(){


    const { threads } = this.props
    const dmIndex = (
      <ul className="dm-index">
      {
        threads.map(this.mapDirectMessages)
      }
      <li className="create-channel-button"><Link to='/client/add'>New Conversation</Link></li>
    </ul>
    )
    const channelIndex = (
      <ul className="channel-index">
      {
        threads.map(this.mapChannels)
      }

      <AddChannelButton toggleModal={this.props.toggleModal} />

    </ul>
    )
    return(
      <div className="thread-index">
        <h3 onClick={()=>this.toggleDropDown("showChannels")} className="thread-header">Channels</h3>
        {this.state.showChannels ? channelIndex : ""}
        <h3 onClick={()=>this.toggleDropDown("showDms")} className="thread-header">Messages</h3>
        {this.state.showDms ? dmIndex : ""}
      </div>
    )
  }
}

export default ThreadIndex