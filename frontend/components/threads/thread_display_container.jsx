import {connect} from 'react-redux'
import ThreadDisplay from './thread_display'

const mSTP = (state, ownProps) => ({
  currentThreadId: ownProps.match.params.threadId
})


export default connect(mSTP)(ThreadDisplay)