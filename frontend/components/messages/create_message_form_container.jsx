import MessageForm from './message_form'
import {connect} from 'react-redux'
import { createMessage } from '../../actions/message_actions'

const mSTP = (state) => ({
  message: {
    content: "",
    sender_id: state.session.id,
    channel_dms_id: state.ui.currentThread
  },
  formType: "Send",
  
  
})

const mDTP = (dispatch) => ({
  submit: (message)=> dispatch(createMessage(message))
})

export default connect(mSTP, mDTP)(MessageForm)