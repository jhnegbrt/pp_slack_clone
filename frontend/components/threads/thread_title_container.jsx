import {connect} from 'react-redux'
import ThreadTitle from './thread_title'
import {fetchAllUsers} from '../../actions/user_actions'


const mSTP = state =>({
  users: state.entities.users
})

const mDTP = dispatch =>({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
})

export default connect(mSTP, mDTP)(ThreadTitle)