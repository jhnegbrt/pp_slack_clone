import NewChannelModal from './new_channel_modal'
import {connect} from 'react-redux'
import { receiveCurrentThread} from '../../../../actions/thread_actions'
import {receiveMessage, receiveMessages} from '../../../../actions/message_actions'
import {fetchAllUsers} from '../../../../actions/user_actions'



const mSTP = state => ({
  channel: {
    title: "",
    selectedUsers: [state.session.id],
    channel: true,
    private: false
  },
  creatorId: state.session.id,
})

const mDTP = (dispatch) => ({
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  receiveMessages: (messages) => dispatch(receiveMessages(messages)),
  receiveCurrentThread: (thread) => dispatch(receiveCurrentThread(thread.id)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
})

export default connect(mSTP, mDTP)(NewChannelModal)