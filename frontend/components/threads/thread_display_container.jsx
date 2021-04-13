import {connect} from 'react-redux'
import ThreadDisplay from './thread_display'

const mSTP = (state) => ({
  threadId: state.threads.currentThread
})

export default connect(mSTP)(ThreadDisplay)