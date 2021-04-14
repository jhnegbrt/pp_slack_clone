import { connect } from 'react-redux'
import MessageIndex from './message_index'

const mSTP = (state, ownProps) => {
  return({
    messages: Object.values(state.entities.messages).filter(el => el.channel_dms_id === parseInt(ownProps.currentThreadId)),
    currentThreadId: ownProps.currentThreadId
  })
}


export default connect(mSTP, null)(MessageIndex)