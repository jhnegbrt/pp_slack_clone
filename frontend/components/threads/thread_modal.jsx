import React from 'react'

class ThreadModal extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchAllUsers()
  }

  render(){
    debugger
    return(
      <div className="thread-modal-container">
        <div className="thread-modal">
          <div className="thread-close">
            <button onClick={()=>this.props.toggleModal(this.props.formType)}>Close</button>
          </div>
          
          <div className="modal-header">
            {this.props.formType === "message" ? "New Direct Message" : "Create Channel"}</div>
        </div>
      </div>
    )
  }
}

export default ThreadModal