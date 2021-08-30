import AddDirectMessage from './add_direct_message'
import {fetchAllUsers} from '../../../../actions/user_actions'
import { receiveCurrentThread } from '../../../../actions/thread_actions'
import {connect} from 'react-redux'

const mSTP = state => ({
  threads: Object.values(state.workspace.threads),
  users: state.workspace.users,
  currentUser: state.session.id,
  stateThreadId: state.ui.currentThread.id
})

const mDTP = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  receiveCurrentThread: (id) => dispatch(receiveCurrentThread(id))
})

export default connect(mSTP, mDTP)(AddDirectMessage)