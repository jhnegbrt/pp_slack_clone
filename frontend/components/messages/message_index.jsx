import React from 'react'
import MessageIndexItemContainer from './message_index_item_container'
import CreateMessageFormContainer from './create_message_form_container'

class MessageIndex extends React.Component{
  componentDidMount(){
    this.props.fetchMessages()
  }

  render(){
    
    const { messages, deleteMessage } = this.props

    return(
      <div>
        <ul>
          {
            messages.map(message =>(
              <MessageIndexItemContainer
                message={message}
                deleteMessage={deleteMessage}
                key={message.id}
                />
            ))
          }
        </ul>
        <CreateMessageFormContainer />
      </div>
    )
  }
}

export default MessageIndex