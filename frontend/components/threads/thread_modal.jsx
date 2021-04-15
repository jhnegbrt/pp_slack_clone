import React from 'react'

class ThreadModal extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className={"thread-modal"}>
        <div className="modal-header">{this.props.formType}</div>
      </div>
    )
  }
}

export default ThreadModal