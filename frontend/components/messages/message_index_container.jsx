import { connect } from 'react-redux'
import {clearMessages} from '../../actions/message_actions'
import MessageIndex from './message_index'

const mSTP = (state, ownProps) => {
  return({
    messages: Object.values(state.workspace.messages),
    currentThreadId: ownProps.currentThreadId
  })
}

const mDTP = (dispatch) => ({
  clearMessages: () => dispatch(clearMessages())
})


export default connect(mSTP, mDTP)(MessageIndex)