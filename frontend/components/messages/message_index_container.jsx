import { connect } from 'react-redux'
import MessageIndex from './message_index'
import {removeMessage, fetchMessages, receiveMessage, receiveAllMessages } from '../../actions/message_actions'

const mSTP = state => {
  return({
    messages: Object.values(state.entities.messages),
  })
}

const mDTP = dispatch => ({
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  receiveMessages: (messages) => dispatch(receiveAllMessages(messages)),
  removeMessage: (messageId)=> dispatch(removeMessage(messageId))
})

export default connect(mSTP, mDTP)(MessageIndex)