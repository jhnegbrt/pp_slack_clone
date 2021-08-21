import {connect} from 'react-redux'
import ThreadTitle from './thread_title'



const mSTP = state =>({
  currentUserId: state.session.id,
  users: state.entities.workspace.users,
  threads: state.entities.threads
})

export default connect(mSTP)(ThreadTitle)