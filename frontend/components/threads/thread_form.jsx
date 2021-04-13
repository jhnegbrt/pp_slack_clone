import React from 'react'

class ThreadForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.thread
    this.state.creator_id = this.props.creatorId

    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateTitle = this.updateTitle.bind(this)
  }

  
}

export default ThreadForm