import ThreadIndexItem from './thread_index_item'
import {connect} from 'react-redux'
import { receiveCurrentThread } from '../../../actions/thread_actions'
import {receiveMessage, removeMessage, receiveMessages} from '../../../actions/message_actions'
import { incrementNotifications } from '../../../actions/notification_actions'


const mSTP = (state) => ({
  currentUserId: state.session.id,
  users: state.workspace.users,
  currentThreadId: state.ui.currentThread
})

const mDTP = dispatch => ({
  selectThread: (threadId) => dispatch(receiveCurrentThread(threadId)),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  receiveMessages: (messages) => dispatch(receiveMessages(messages)),
  removeMessage: (messageId)=> dispatch(removeMessage(messageId)),
  incrementNotifications: (threadId) => dispatch(incrementNotifications(threadId))

})

export default connect(mSTP, mDTP)(ThreadIndexItem)