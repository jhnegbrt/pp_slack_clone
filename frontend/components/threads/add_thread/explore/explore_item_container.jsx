import {connect} from 'react-redux'
import { receiveCurrentThread } from '../../../../actions/thread_actions'
import {receiveMessage, removeMessage, receiveMessages} from '../../../../actions/message_actions'
import ExploreItem from './explore_item'
import { withRouter } from 'react-router-dom'


const mSTP = (state ) => ({
  currentUserId: state.session.id
})


const mDTP = dispatch => ({
  selectThread: (threadId) => dispatch(receiveCurrentThread(threadId)),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  receiveMessages: (messages) => dispatch(receiveMessages(messages)),
  removeMessage: (messageId)=> dispatch(removeMessage(messageId))

})

export default withRouter(connect(mSTP, mDTP)(ExploreItem))

