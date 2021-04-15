import ThreadDisplayContainer from '../threads/thread_display_container'
import ThreadIndexContainer from '../threads/thread_index_container'
import React from 'react'
import CreateThreadModalContainer from '../threads/create_thread_modal_container'

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


  render(){
    return(
      <div className="client">
        <Route  path='/client' render={(props) => <ThreadIndexContainer {...props} toggleModal={this.toggleModal}/>} />
        <Route path='/client/thread/:threadId' component={ThreadDisplayContainer} />
        {this.state.modal === true ? <CreateThreadModalContainer 
          toggleModal={this.toggleModal}
          closeModal={this.closeModal}
          formType={this.state.newChannel ? "channel" : "message"}/> : null}
      </div>
    )
  }
}

export default Client