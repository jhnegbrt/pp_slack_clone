import { connect } from 'react-redux'
import {fetchThreads } from '../../actions/thread_actions'
import ThreadIndex from './thread_index'

const mSTP = state =>({
  threads: Object.values(state.entities.threads)
})

const mDTP = (dispatch) => ({
  fetchThreads: () => dispatch(fetchThreads())
})

export default connect(mSTP, mDTP)(ThreadIndex)