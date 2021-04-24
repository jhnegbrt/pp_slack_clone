import {connect} from 'react-redux'
import ThreadForm from './thread_form'
import {fetchAllUsers} from '../../../actions/user_actions'
import {createThread, receiveCurrentThread} from '../../../actions/thread_actions'
import {receiveMessage, receiveMessages} from '../../../actions/message_actions'


const mSTP = state => ({
  thread: {
    title: "",
    selectedUsers: [],
    channel: true,
    private: true
  },
  formType: "New Conversation",
  creatorId: state.session.id,
  users: state.entities.workspace.users
})

const mDTP = dispatch => ({
  submit: (thread) => dispatch(createThread(thread)),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  receiveMessages: (messages) => dispatch(receiveMessages(messages)),
  receiveCurrentThread: (thread) => dispatch(receiveCurrentThread(thread.id)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
})

export default connect(mSTP, mDTP)(ThreadForm)