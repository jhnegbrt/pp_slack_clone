import ThreadForm from './thread_form'
import {connect} from 'react-redux'
import {createThread, receiveCurrentThread} from '../../actions/thread_actions'


const mSTP = state => ({
  thread: {
    title: "",
    channel: true,
    private: false
  },
  formType: "Create Thread",
  creatorId: state.session.id
})

const mDTP = (dispatch) => ({
  submit: (thread) => dispatch(createThread(thread)),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  receiveMessages: (messages) => dispatch(receiveAllMessages(messages)),
  removeMessage: (messageId)=> dispatch(removeMessage(messageId)),
  receiveCurrentThread: (thread) => dispatch(receiveCurrentThread(thread.id))
})

export default connect(mSTP, mDTP)(ThreadForm)