import React from 'react'
import MessageIndexItemContainer from './message_index_item_container'
import CreateMessageFormContainer from './create_message_form_container'
import createThread from './create_thread'


class MessageIndex extends React.Component{

  constructor(props){
    super(props)
    this.bottom = React.createRef();
  }

  componentDidMount() {

    createThread(this.props.receiveMessage, this.props.receiveMessages, this.props.removeMessage)

  }
  // componentDidMount() {

  //   createThread(this.props.threadId, this.props.receiveMessage, this.props.receiveMessages, this.props.removeMessage)

  // }

  componentDidUpdate() {
    this.bottom.current.scrollIntoView();
  }

  render(){
    
    const { messages } = this.props
  
    return(
      <div className = "thread-container">
        <ul className="thread">
          {
            messages.map((message, idx) =>(
              <MessageIndexItemContainer
                previous={messages[idx-1]}
                message={message}
                key={message.id}
                />
            ))
          }
        </ul>
        <CreateMessageFormContainer />
        <div ref={this.bottom} />
      </div>
    )
  }
}

export default MessageIndex