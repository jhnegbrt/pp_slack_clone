import ThreadDisplayContainer from '../threads/thread_display_container'
import ThreadIndexContainer from '../threads/thread_index_container'
import React from 'react'
import AddDirectMessage from '../threads/add_thread/add_dm/add_direct_message'
import ExploreContainer from '../threads/add_thread/explore/explore_container'
import CreateChannelModal from '../threads/add_thread/add_channel/create_channel_modal'

import { Route } from 'react-router-dom'

class Client extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      modal: false,
      modalType: "createChannel",
      newChannel: {}
    }
    this.toggleModal = this.toggleModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  toggleModal(modalType, newChannel){
    if (modalType === "addMembers"){
      this.setState({
        newChannel: newChannel,
        modal: true,
        modalType: modalType
      })
    } else {
      this.setState({
        modal: true,
        modalType: modalType
      })
    }
  }

  closeModal(){
    this.setState({
      modal: false
    })
  }


  render(){
    return(
      <div className="client">
        <Route path='/client' render={(props) => <ThreadIndexContainer {...props} toggleModal={this.toggleModal}/>} />
        <Route path='/client/thread/:threadId' component={ThreadDisplayContainer} />
        <Route path='/client/add' component={AddDirectMessage}/>
        <Route path='/client/explore' component={ExploreContainer} />
        {this.state.modal === true ? <CreateChannelModal
          newChannel={this.state.newChannel}
          toggleModal={this.toggleModal}
          closeModal={this.closeModal}
          modalType={this.state.modalType}/> : null}
      </div>
    )
  }
}

export default Client