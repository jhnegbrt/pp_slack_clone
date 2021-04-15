import ThreadModal from './thread_modal'
import {connect} from 'react-redux'
import {createThread, receiveCurrentThread, fetchThreads} from '../../actions/thread_actions'
import {receiveMessage, receiveMessages} from '../../actions/message_actions'
import {fetchAllUsers} from '../../actions/user_actions'



const mSTP = state => ({
  thread: {
    title: "",
    selectedUsers: [],
    channel: true,
    private: false
  },
  formType: "Create Thread",
  creatorId: state.session.id,
  users: state.entities.workspace.users
})

const mDTP = (dispatch) => ({
  submit: (thread) => dispatch(createThread(thread)),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  receiveMessages: (messages) => dispatch(receiveMessages(messages)),
  receiveCurrentThread: (thread) => dispatch(receiveCurrentThread(thread.id)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
})

export default connect(mSTP, mDTP)(ThreadModal)