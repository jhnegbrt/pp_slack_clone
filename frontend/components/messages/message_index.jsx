import React from 'react'
import MessageIndexItemContainer from './message_index_item_container'
import CreateMessageFormContainer from './create_message_form_container'



class MessageIndex extends React.Component{

  constructor(props){
    super(props)
    this.bottom = React.createRef();
  }

  componentDidUpdate() {
    this.bottom.current.scrollIntoView();
  }

  render(){ 
    const { messages } = this.props
    return(
      <div className="messages-display">
        <div className = "messages-container">
          <ul className="messages">
            {
              messages.map((message, idx) => 
                <MessageIndexItemContainer
                  previous={messages[idx-1]}
                  message={message}
                  key={message.id}
                  /> 
              )
            }
          </ul>
          <div ref={this.bottom} />
        </div>
        <div className="message-input">
          <CreateMessageFormContainer currentThreadId={this.props.currentThreadId}/>
        </div>
      </div>

    )
  }
}

export default MessageIndex