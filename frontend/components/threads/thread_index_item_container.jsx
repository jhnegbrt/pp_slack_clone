import ThreadIndexItem from './thread_index_item'
import {connect} from 'react-redux'
import { receiveCurrentThread, fetchThreads, createThread } from '../../actions/thread_actions'
import {receiveMessage, receiveAllMessages} from '../../actions/message_actions'


const mSTP = (state, ownProps) => ({
  currentThreadId: ownProps.match.params.threadId
})

const mDTP = dispatch => ({
  selectThread: (threadId) => dispatch(receiveCurrentThread(threadId)),
  submit: (thread) => dispatch(createThread(thread)),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  receiveMessages: (messages) => dispatch(receiveAllMessages(messages)),
  removeMessage: (messageId)=> dispatch(removeMessage(messageId)),
  receiveCurrentThread: (thread) => dispatch(receiveCurrentThread(thread.id)),
  fetchThreads: () => dispatch(fetchThreads())

})

export default connect(null, mDTP)(ThreadIndexItem)