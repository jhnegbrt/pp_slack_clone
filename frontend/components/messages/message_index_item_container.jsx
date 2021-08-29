import {connect} from 'react-redux'
import MessageIndexItem from './message_index_item'


const mSTP = (state, ownProps) =>{
  return({
    currentUserId: state.session.id,
    channel_dms_id: ownProps.currentThreadId
  })
}


export default connect(mSTP)(MessageIndexItem)