import { connect } from 'react-redux'
import MessageIndex from './message_index'

const mSTP = (state, ownProps) => {
  return({
    messages: Object.values(state.entities.messages),
    currentThreadId: ownProps.currentThreadId
  })
}


export default connect(mSTP, null)(MessageIndex)