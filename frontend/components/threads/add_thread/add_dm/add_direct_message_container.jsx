import AddDirectMessage from './add_direct_message'
import {fetchAllUsers} from '../../../../actions/user_actions'
import {connect} from 'react-redux'

const mSTP = state => ({
  threads: Object.values(state.entities.threads),
  users: state.entities.workspace.users,
  currentUser: state.session.id
})

const mDTP = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
})

export default connect(mSTP, mDTP)(AddDirectMessage)