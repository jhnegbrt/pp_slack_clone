import ThreadDisplayContainer from '../threads/thread_display_container'
import ThreadIndexContainer from '../threads/thread_index_container'
import React from 'react'
import ThreadModalContainer from '../threads/thread_modal_container'

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


  render(){
    return(
      <div className="client">
        <Route  path='/client' render={(props) => <ThreadIndexContainer {...props} toggleModal={this.toggleModal}/>} />
        <Route path='/client/thread/:threadId' component={ThreadDisplayContainer} />
        {this.state.modal === true ? <ThreadModalContainer 
          toggleModal={this.toggleModal} formType={this.state.newChannel ? "channel" : "message"}/> : null}
      </div>
    )
  }
}

export default Client