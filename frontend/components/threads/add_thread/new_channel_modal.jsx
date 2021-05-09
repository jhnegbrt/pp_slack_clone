import createMessagesConnection from '../../../util/create_messages_connection'
import React from 'react'


class NewChannelModal extends React.Component{
  constructor(props){
    super(props)
    //I am pretty sure that I can remove line 11 and just set creator_id in state
    //would require changing the way state is passed in from the container
    this.state = this.props.channel
    this.state.creator_id = this.props.creatorId
    this.updateTitle = this.updateTitle.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    debugger
    this.props.fetchAllUsers()
  }

  updateTitle(e){
    this.setState({
      title: e.target.value
    })
  }


  handleSubmit(e){
    e.preventDefault()
    this.props.toggleModal("addMembers", this.state)
    this.setState({
      title: "",
      selectedUsers: [],
    })
  }


  render(){
    return(
      <div className="thread-modal-container">
        <div className="thread-modal">
          <div className="thread-close">
            <button onClick={this.props.closeModal}>Close</button>
          </div>
          <div className="modal-header">Create Channel</div>
            <div className="create-thread">
              <form onSubmit = {this.handleSubmit}>
                <input onChange = {this.updateTitle}
                  placeholder={"Channel Title"}
                  type="text"
                  value={this.state.title}></input>
                <input type="submit" value="Create!"></input>
              </form>
            </div>
          </div>
      </div>
    )
  }
}

export default NewChannelModal