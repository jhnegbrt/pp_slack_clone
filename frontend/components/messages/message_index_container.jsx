import { connect } from 'react-redux'
import {clearMessages} from '../../actions/message_actions'
import MessageIndex from './message_index'

const mSTP = (state) => ({
  messages: Object.values(state.workspace.messages),
  subscriptions: App.cable.subscriptions.subscriptions
})

const mDTP = (dispatch) => ({
  clearMessages: () => dispatch(clearMessages())
})


export default connect(mSTP, mDTP)(MessageIndex)