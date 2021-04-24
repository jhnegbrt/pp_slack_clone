import ThreadDisplayContainer from '../threads/thread_display_container'
import ThreadIndexContainer from '../threads/thread_index_container'
import React from 'react'
import ChannelFormContainer from '../threads/add_thread/channel_form_container'
import DMFormContainer from '../threads/add_thread/dm_form_container'
import BrowseChannelsContainer from '../threads/add_thread/browse_channels_container'

import { Route } from 'react-router-dom'

class Client extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      modal: false,
      newChannel: false,
      newDm: false
    }
    this.toggleModal = this.toggleModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  toggleModal(formType){
    this.setState({
      modal: !this.state.modal
    })
    if (formType === "message"){
      this.setState({
        newDm: !this.state.newDm
      })
    } else if (formType === "channel"){
      this.setState({
        newChannel: !this.state.newChannel
      })
    }
  }

  closeModal(){
    this.setState({
      modal: false
    })
  }

  componentDidMount(){
    this.props.fetchThreads()
  }


  render(){
    return(
      <div className="client">
        <Route path='/client' render={(props) => <ThreadIndexContainer {...props} toggleModal={this.toggleModal}/>} />
        <Route path='/client/thread/:threadId' component={ThreadDisplayContainer} />
        <Route path='/client/browseChannels' component={BrowseChannelsContainer} />
        <Route path='/client/newChannel' component={ChannelFormContainer} />
        <Route path='/client/addDM' component={DMFormContainer} />
        {/* {this.state.modal === true ? <CreateThreadModalContainer 
          toggleModal={this.toggleModal}
          closeModal={this.closeModal}
          formType={this.state.newChannel ? "channel" : "message"}/> : null} */}
      </div>
    )
  }
}

export default Client