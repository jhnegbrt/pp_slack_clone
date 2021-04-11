import React from 'react'
import MessageIndexItemContainer from './message_index_item_container'
import CreateMessageFormContainer from './create_message_form_container'


class MessageIndex extends React.Component{
  // componentDidMount(){
  //   this.props.fetchMessages()
  // }
  constructor(props){
    super(props)

  }


  componentDidMount() {
    this.props.fetchMessages()
    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: message => {
          this.props.receiveMessage(message)
        },
        speak: function(message) {
          return this.perform("speak", message);
        }
      }
    );
  }

  // componentDidUpdate() {
  //   this.bottom.current.scrollIntoView();
  // }

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