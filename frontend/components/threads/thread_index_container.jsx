import { connect } from 'react-redux'
import ThreadIndex from './thread_index'

const mSTP = state =>({
  threads: state.entities.threads
})

export default connect(mSTP)(ThreadIndex)