import {connect} from 'react-redux'
import ThreadTitle from './thread_title'



const mSTP = state =>({
  currentUserId: state.session.id,
  users: state.workspace.users,
  threads: state.workspace.threads
})

export default connect(mSTP)(ThreadTitle)