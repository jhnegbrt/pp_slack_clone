import MessageForm from './message_form'
import {connect} from 'react-redux'
import { createMessage } from '../../actions/message_actions'

const mSTP = (state) => ({
  message: {
    content: ""
  },
  formType: "Send",
  senderId: state.session.id
})

const mDTP = (dispatch) => ({
  submit: (message)=> dispatch(createMessage(message))
})

export default connect(mSTP, mDTP)(MessageForm)