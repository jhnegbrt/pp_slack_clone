import React from 'react'
import MessageIndexItemContainer from './message_index_item_container'
import CreateMessageFormContainer from './create_message_form_container'
import createChannel from './create_channel'


class MessageIndex extends React.Component{

  constructor(props){
    super(props)

  }


  componentDidMount() {

    createChannel(this.props.receiveMessage, this.props.receiveMessages, this.props.removeMessage)

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