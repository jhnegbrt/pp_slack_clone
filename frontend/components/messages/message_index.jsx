import React from 'react'
import MessageIndexItemContainer from './message_index_item_container'
import CreateMessageFormContainer from './create_message_form_container'
import SearchMessageFormContainer from './search_message_form_container'



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
          <SearchMessageFormContainer />
          }
        </div>
      </div>

    )
  }
}

export default MessageIndex