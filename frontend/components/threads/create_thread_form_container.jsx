import ThreadForm from './thread_form'
import {connect} from 'react-redux'
import {createThread, receiveCurrentThread, fetchThreads} from '../../actions/thread_actions'
import {receiveMessage, receiveAllMessages} from '../../actions/message_actions'


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
  receiveCurrentThread: (thread) => dispatch(receiveCurrentThread(thread.id)),
  fetchThreads: () => dispatch(fetchThreads())
})

export default connect(mSTP, mDTP)(ThreadForm)