import React from 'react'
import MessageIndexItemContainer from './message_index_item_container'
import CreateMessageFormContainer from './create_message_form_container'



class MessageIndex extends React.Component{

  constructor(props){
    super(props)
    this.bottom = React.createRef();
  }

  render(){ 
    const { messages } = this.props
    return(
      <div className = "messages-container">
        <ul className="messages">
          {
            messages.map((message, idx) => 
            (message.channel_dms_id === parseInt(this.props.currentThreadId) ?
              <MessageIndexItemContainer
                previous={messages[idx-1]}
                message={message}
                key={message.id}
                /> 
                : null)
            )
          }
        </ul>
        <CreateMessageFormContainer currentThreadId={this.props.currentThreadId}/>
        {/* <div ref={this.bottom} /> */}
      </div>
    )
  }
}

export default MessageIndex