import React from 'react'
import MessageIndexItemContainer from './message_index_item_container'
import CreateMessageFormContainer from './create_message_form_container'
import createChannel from './create_channel'


class MessageIndex extends React.Component{

  constructor(props){
    super(props)
    this.bottom = React.createRef();
  }

  componentDidMount() {

    createChannel(this.props.receiveMessage, this.props.receiveMessages, this.props.removeMessage)

  }

  componentDidUpdate() {
    this.bottom.current.scrollIntoView();
  }

  render(){
    
    const { messages, deleteMessage } = this.props
  
    return(
      <div className = "thread-container">
        <ul className="thread">
          {
            messages.map(message =>(
              <MessageIndexItemContainer
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