import MessageForm from './message_form'
import {connect} from 'react-redux'
import { createMessage } from '../../actions/message_actions'

const mSTP = (state) => {
  return({
    message: {
      content: "",
      sender_id: state.session.id,
    },
    formType: "Send",
    currentThreadId: state.ui.currentThread.Id
  }) 
}

const mDTP = (dispatch) => ({
  submit: (message)=> dispatch(createMessage(message))
})

export default connect(mSTP, mDTP)(MessageForm)