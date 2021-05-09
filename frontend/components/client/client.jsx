import ThreadDisplayContainer from '../threads/thread_display_container'
import ThreadIndexContainer from '../threads/thread_index_container'
import React from 'react'
import ChannelFormContainer from '../threads/add_thread/channel_form_container'
import DMFormContainer from '../threads/add_thread/dm_form_container'
import ExploreContainer from '../threads/add_thread/explore/explore_container'
import CreateChannelModal from '../threads/add_thread/create_channel_modal'

import { Route } from 'react-router-dom'

class Client extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      modal: false,
      modalType: "createChannel"
    }
    this.toggleModal = this.toggleModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  toggleModal(modalType){
    this.setState({
      modal: true,
      modalType: modalType
    })
  }

  closeModal(){
    this.setState({
      modal: "hidden"
    })
  }

  // componentDidMount(){
  //   this.props.fetchThreads()
  // }


  render(){
    return(
      <div className="client">
        <Route path='/client' render={(props) => <ThreadIndexContainer {...props} toggleModal={this.toggleModal}/>} />
        <Route path='/client/thread/:threadId' component={ThreadDisplayContainer} />
        <Route path='/client/explore' component={ExploreContainer} />
        {/* <Route path='/client/newChannel' component={ChannelFormContainer} />
        <Route path='/client/addDM' component={DMFormContainer} /> */}
        {this.state.modal === true ? <CreateChannelModal
          toggleModal={this.toggleModal}
          closeModal={this.closeModal}
          modalType={this.state.modalType}/> : null}
      </div>
    )
  }
}

export default Client