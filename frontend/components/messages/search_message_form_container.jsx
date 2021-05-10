import {connect} from 'react-redux'
import SearchMessageForm from './search_message_form'
import {createThread} from '../../actions/thread_actions'

const mSTP = state => ({
  currentUserId: state.session.id
})

const mDTP = (dispatch) => ({
  createDirectMessage: (directMessage)=> dispatch(createThread(directMessage))
})


export default connect(mSTP, mDTP)(SearchMessageForm)