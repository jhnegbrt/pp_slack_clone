import React from 'react'

class MessageForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.,essage

    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateConte
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.submit(this.state)
  }

  updateContent(e){
    this.setState({
      content: e.target.value
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.updateContent} type="text" placeholder="SEND MESSAGE" value={this.state.content}></input>
        <input type="submit" value="SEND"></input>
      </form>
    )
  }
}

export default MessageForm