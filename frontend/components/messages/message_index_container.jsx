import { connect } from 'react-redux'
import MessageIndex from './message_index'
import {deleteMessage, fetchMessages } from '../../actions/message_actions'

const mSTP = state => ({
  messages: Object.values(state.messages)
})

const mDTP = dispatch => ({
  fetchMessages: ()=> dispatch(fetchMessages()),
  deleteMessage: (messageId)=> dispatch(deleteMessage(messageId))
})

export default connect(mSTP, mDTP)(MessageIndex)