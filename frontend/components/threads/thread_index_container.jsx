import { connect } from 'react-redux'
import {fetchThreads } from '../../actions/thread_actions'
import ThreadIndex from './thread_index'
import {fetchAllUsers} from '../../actions/user_actions'
import {receiveAllThreads, receiveThread } from '../../actions/thread_actions'

const mSTP = (state, ownProps) =>({

    threads: Object.values(state.entities.threads),
    currentThreadId: state.ui.currentThread,
    currentUserId: state.session.id

})

const mDTP = (dispatch) => ({
  fetchThreads: () => dispatch(fetchThreads()),
  receiveThreads: (threads) => dispatch(receiveAllThreads(threads)),
  receiveThread: (thread) => dispatch(receiveThread(thread)),
  fetchAllUsers: () => dispatch(fetchAllUsers())
  
})

export default connect(mSTP, mDTP)(ThreadIndex)