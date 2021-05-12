import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import SearchMessageForm from './search_message_form'
import {fetchThreads, createThread} from '../../actions/thread_actions'


const mSTP = (state, ownProps) => ({
  currentUserId: state.session.id,
  history: ownProps.history
})

const mDTP = (dispatch) => ({
  createDirectMessage: (directMessage)=> dispatch(createThread(directMessage)),
  fetchThreads: () => dispatch(fetchThreads())
})


export default withRouter(connect(mSTP, mDTP)(SearchMessageForm))