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
    const {currentUserId, receiveThread, receiveThreads} = this.props
    createThreadsConnection(currentUserId, receiveThread, receiveThreads)
    
  }

  mapThread(thread){
    if (typeof thread === "number" || thread.title == undefined || thread.title == ""){
      return
    } else {
      return <ThreadIndexItemContainer thread={thread} key={thread.id} threadId={thread.channel_dms_id}/>
    }
  }



  render(){
    const { threads } = this.props
    return(
      <div className="thread-index">
        <ul className="channel-index">
          {
            threads.map(this.mapThread)
          }

          <AddChannelButton toggleModal={this.props.toggleModal} />

        </ul>
        <ul>
          {
            threads.map(this.mapThread)
          }
          <li className="create-channel-button"><Link to='/client/addDM'>New Conversation</Link></li>
        </ul>
      </div>
    )
  }
}

export default ThreadIndex