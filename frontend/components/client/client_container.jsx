import {fetchThreads } from '../../actions/thread_actions'
import Client from './client'
import {connect} from 'react-redux'

// const mSTP = (state, ownProps) =>{

//   return({
//     threads: Object.values(state.entities.threads),
//     currentThreadId: state.ui.currentThread,
//     currentUserId: state.session.id
//   })

// }

const mDTP = (dispatch) => ({
  fetchThreads: () => dispatch(fetchThreads())
})

export default connect(null, mDTP)(Client)