import MessageForm from './message_form'
import {connect} from 'react-redux'
import { createMessage } from '../../actions/message_actions'

const mSTP = (state, ownProps) => ({
    message: {
      content: "",
      sender_id: state.session.id,
      channel_dms_id: ownProps.currentThreadId
    },
    formType: "Send"
})

const mDTP = (dispatch) => ({
  //I believe I can get rid of this code -- test later
  submit: (message)=> dispatch(createMessage(message))
})

export default connect(mSTP, mDTP)(MessageForm)