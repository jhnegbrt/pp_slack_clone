import { connect } from 'react-redux'
import ThreadIndex from './thread_index'
import {fetchAllUsers} from '../../../actions/user_actions'
import {receiveAllThreads, receiveThread, removeThread } from '../../../actions/thread_actions'
import { withRouter } from 'react-router-dom'

const mSTP = (state, ownProps) =>({
    threads: Object.values(state.workspace.threads),
    currentUserId: state.session.id,
    notifications: state.ui.notifications
})

const mDTP = (dispatch) => ({
  receiveThreads: (threads) => dispatch(receiveAllThreads(threads)),
  receiveThread: (thread) => dispatch(receiveThread(thread)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  removeThread: (thread) => dispatch(removeThread(thread))
})

export default withRouter(connect(mSTP, mDTP)(ThreadIndex))