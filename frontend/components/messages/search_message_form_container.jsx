import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import SearchMessageForm from './search_message_form'
import {fetchThreads, createThread} from '../../actions/thread_actions'


const mSTP = (state, ownProps) => ({
  currentUserId: state.session.id,
  history: ownProps.history
})

const mDTP = (dispatch) => ({
  createThread: (directMessage, users, content) => dispatch(createThread(directMessage, users, content)),
  fetchThreads: () => dispatch(fetchThreads())
})


export default withRouter(connect(mSTP, mDTP)(SearchMessageForm))