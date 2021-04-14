import {connect} from 'react-redux'
import ThreadDisplay from './thread_display'
import { receiveCurrentThread, fetchThreads, createThread } from '../../actions/thread_actions'
import {receiveMessage, receiveCurrentMessages} from '../../actions/message_actions'

const mSTP = (state, ownProps) => ({
  currentThreadId: ownProps.match.params.threadId
})


const mDTP = dispatch => ({
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  receiveCurrentMessages: (messages) => dispatch(receiveCurrentMessages(messages)),
  removeMessage: (messageId)=> dispatch(removeMessage(messageId)),
  receiveCurrentThread: (thread) => dispatch(receiveCurrentThread(thread.id)),
  fetchThreads: () => dispatch(fetchThreads())

})

export default connect(mSTP, mDTP)(ThreadDisplay)