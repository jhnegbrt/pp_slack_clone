import AddDirectMessage from './add_direct_message'
import {fetchAllUsers} from '../../../../actions/user_actions'
import { receiveSearchThread } from '../../../../actions/search_thread_actions'
import {connect} from 'react-redux'

const mSTP = state => ({
  threads: Object.values(state.workspace.threads),
  users: state.workspace.users,
  currentUser: state.session.id,
  searchThreadId: state.ui.searchThread.id
})

const mDTP = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),

})

export default connect(mSTP, mDTP)(AddDirectMessage)