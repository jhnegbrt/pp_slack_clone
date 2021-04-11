import React from 'react'
import MessageIndexItemContainer from './message_index_item_container'
import CreateMessageFormContainer from './create_message_form_container'


class MessageIndex extends React.Component{

  constructor(props){
    super(props)

    // this.props.deleteMessage = this.props.deleteMessage.bind(this)

  }

  
  componentDidMount() {
    this.props.fetchMessages()
    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          switch (data.type){
            case "message":
              this.props.receiveMessage(data)
            case "delete":
              this.props.removeMessage(data['message_id'])
          }
        
        },
        speak: function(message) {
          return this.perform("speak", message);
        },
        update: function(message){
          return this.perform("update_message", message)
        },
        remove_message: function(data){
          return this.perform("remove_message", data)
        }
      }
    );
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
                // deleteMessage={deleteMessage}
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