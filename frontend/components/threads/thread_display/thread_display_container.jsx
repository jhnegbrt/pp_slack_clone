import {connect} from 'react-redux'
import ThreadDisplay from './thread_display'

const mSTP = (state, ownProps) => ({
  urlThreadId: ownProps.match.params.threadId
})


export default connect(mSTP)(ThreadDisplay)