import {connect} from 'react-redux'
import ThreadDisplay from './thread_display'

const mSTP = (state) => ({
  currentThreadId: state.ui.currentThread.id
})

export default connect(mSTP)(ThreadDisplay)