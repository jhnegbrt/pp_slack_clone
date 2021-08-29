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
      searchDmId: null,
      fetchedMessages: false
    }
  }

  fetchMessages(threadId){
    let subscriptions = App.cable.subscriptions.subscriptions
    for (let i = 0; i < subscriptions.length; i++){
      let identifier = JSON.parse(subscriptions[i].identifier)
      if (identifier.channel === "ChatChannel" && identifier.thread_id === parseInt(threadId)){
        this.props.receiveCurrentThread(parseInt(threadId))
        subscriptions[i].load(),
        this.setState({
          fetchedMessages: true
        })
        return
      }
    }
  }

  // componentDidMount(){
  //   let { currentThreadId } = this.props
  //   if (App.cable.subscriptions.subscriptions.length > 1){
  //     this.fetchMessages(currentThreadId)
  //   }
  // }


  componentDidUpdate() {
    let {messages, currentThreadId, searchDmId} = this.props
    // if (!this.props.searchDmId && !currentThreadId && messages.length > 0){
    //   this.props.clearMessages()
    //   this.setState({
    //     fetchedMessages: false
    //   })
    // } else if (this.state.fetchedMessages === false && App.cable.subscriptions.subscriptions.length > 1){
    //   if(currentThreadId){
    //     this.fetchMessages(parseInt(currentThreadId))
    //   } else {
    //     this.fetchMessages(parseInt(searchDmId))
    //   }
    // } else if (this.props.searchDmId != this.state.searchDmId){
    //   this.setState({
    //     searchDmId,
    //     threadId: null
    //   })
    //   this.fetchMessages(searchDmId)
    // } else if (currentThreadId && this.state.threadId != parseInt(currentThreadId) && App.cable.subscriptions.subscriptions.length > 1){
    //   this.props.clearMessages()
    //   this.setState({
    //     threadId: parseInt(currentThreadId),
    //     searchDmId: null
    //   })
    //   this.fetchMessages(currentThreadId)
    // }
    this.bottom.current.scrollIntoView();
  }

  render(){
    const {messages} = this.props
    console.log(messages)
    return(
      <div style={{maxHeight: this.props.type === "thread" ? '90vh' : '85vh'}} className="messages-display">
        <div className="messages-container">
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
          <div className="messages-bottom" ref={this.bottom} />
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