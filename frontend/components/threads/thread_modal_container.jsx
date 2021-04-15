import ThreadModal from './thread_modal'
import {connect} from 'react-redux'
import {fetchAllUsers} from '../../actions/user_actions'



const mSTP = (state, ownProps) => ({
  
})

const mDTP = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(mSTP, mDTP)(ThreadModal)