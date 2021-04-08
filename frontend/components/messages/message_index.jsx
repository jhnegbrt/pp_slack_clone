import React from 'react'
import MessageIndexItem from './message_index_item'
import CreateMessageFormContainer from './create_message_form_container'

class MessageIndex extends React.Component{
  componentDidMount(){
    this.props.fetchMessages()
  }
}