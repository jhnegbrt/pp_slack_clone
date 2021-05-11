import React from 'react'
import ThreadIndexItemContainer from './thread_index_item_container'
import createThreadsConnection from '../../util/create_threads_connection'
import AddChannelButton from './add_channel_button'
import {Link} from 'react-router-dom'

class ThreadIndex extends React.Component{
  constructor(props){
    super(props)
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

  render(){
    const { threads } = this.props
    return(
      <div className="thread-index">
        <h3>Channels</h3>
        <ul className="channel-index">
          {
            threads.map(this.mapChannels)
          }

          <AddChannelButton toggleModal={this.props.toggleModal} />

        </ul>
        <h3>Messages</h3>
        <ul>
          {
            threads.map(this.mapDirectMessages)
          }
          <li className="create-channel-button"><Link to='/client/add'>New Conversation</Link></li>
        </ul>
      </div>
    )
  }
}

export default ThreadIndex