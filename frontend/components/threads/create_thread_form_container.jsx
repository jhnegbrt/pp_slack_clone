import ThreadForm from './thread_form'
import {connect} from 'react-redux'
import {createThread} from '../../actions/thread_actions'


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
  submit: (thread) => dispatch(createThread(thread))
})

export default connect(mSTP, mDTP)(ThreadForm)