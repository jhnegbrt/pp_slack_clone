import React from 'react'
import MessageIndexItemContainer from './message_index_item_container'
import CreateMessageFormContainer from './create_message_form_container'
import SearchMessageFormContainer from './search_message_form_container'

class MessageIndex extends React.Component{

  constructor(props){
    super(props)
    this.bottom = React.createRef();
    this.state = {
      threadId: null,
      searchDmId: null
    }
  }

  fetchMessages(threadId){
    let subscriptions = App.cable.subscriptions.subscriptions
    for (let i = 0; i < subscriptions.length; i++){
      let identifier = JSON.parse(subscriptions[i].identifier)
      if (identifier.channel === "ChatChannel" && identifier.thread_id === parseInt(threadId)){
        subscriptions[i].load()
        break
      }
    }
  }

  componentDidMount(){
    this.fetchMessages(parseInt(this.props.currentThreadId))
  }

  componentDidUpdate() {
    let {messages, currentThreadId, searchDmId} = this.props
    if (this.props.searchDmId === null && currentThreadId === undefined && messages.length > 0){
      this.props.clearMessages()
    } else if (this.props.searchDmId != this.state.searchDmId){
      this.setState({
        searchDmId,
        threadId: null
      })
      this.fetchMessages(searchDmId)
    } else if (this.state.threadId != currentThreadId){
      this.setState({
        threadId: currentThreadId,
        searchDmId: null
      })
      this.fetchMessages(currentThreadId)
    }
    this.bottom.current.scrollIntoView();
  }

  render(){
    console.log(this.props)
    const {messages} = this.props
    return(
      <div style={{maxHeight: this.props.type === "thread" ? '90vh' : '85vh'}} className="messages-display">
        <div className = "messages-container">
          <ul className="messages">
            {
              messages.map((message, idx) => 
                <MessageIndexItemContainer
                  previous={messages[idx-1]}
                  message={message}
                  key={message.id}
                  currentThreadId={this.props.currentThreadId}
                  /> 
              )
            }
          </ul>
          <div ref={this.bottom} />
        </div>
        <div className="message-input">
          {this.props.type === "thread" ? 
          <CreateMessageFormContainer currentThreadId={this.props.currentThreadId}/> :
          <SearchMessageFormContainer 
          searchDmId={this.props.searchDmId}
          selectedUsers={this.props.selectedUsers}/>
          }
        </div>
      </div>

    )
  }
}

export default MessageIndex