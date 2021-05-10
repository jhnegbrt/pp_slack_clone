import {connect} from 'react-redux'
import SearchMessageForm from './search_message_form'

const mSTP = state => ({
  currentUserId: state.session.id
})

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(SearchMessageForm)