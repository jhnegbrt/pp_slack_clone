import MessageForm from './message_form'
import { connect } from 'react-redux'
import { fetchMessage, updateMessage } from '../../actions/message_actions'
import React from 'react'

class EditMessageForm extends React.Component{
  
  componentDidMount(){
    this.props.fetchMessage(this.props.id)
  }

  render(){
    const { submit, message, formType } = this.props

    if (!message) return null;
    return(
      <MessageForm toggleEdit={this.props.toggleEdit} formType={formType} submit={submit} message={message}></MessageForm>

    );
  }
}

const mSTP = (state, ownProps) => ({
  message: state.messages[ownProps.id],
  formType: "Edit Message"
})

const mDTP = (dispatch) => ({
  submit: (message)=> dispatch(updateMessage(message)),
  fetchMessage: (messageId) => dispatch(fetchMessage(messageId))
})


export default connect(mSTP, mDTP)(EditMessageForm)