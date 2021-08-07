import MessageForm from './message_form'
import {connect} from 'react-redux'

const mSTP = (state, ownProps) => ({
    message: {
      content: "",
      sender_id: state.session.id,
      channel_dms_id: ownProps.currentThreadId
    },
    formType: "Send"
})

export default connect(mSTP, null)(MessageForm)