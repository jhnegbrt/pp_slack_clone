import React from 'react'
import Close from '../../../../../app/assets/images/close.svg'

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
          <div className="new-channel-close" onClick={this.props.closeModal}>
            <img className="close-modal-button" fill="red" stroke="green"src={Close}></img>
          </div>  
          <div className="modal-header">Create Channel</div>
            <div className="create-thread">
              <form onSubmit = {this.handleSubmit}>
                <input onChange = {this.updateTitle}
                  autoFocus={true}
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