import ThreadIndexItem from './thread_index_item'
import {connect} from 'react-redux'
import { receiveCurrentThread } from '../../actions/thread_actions'

const mDTP = dispatch => ({
  selectThread: (threadId) => dispatch(receiveCurrentThread(threadId))
})

export default connect(null, mDTP)(ThreadIndexItem)