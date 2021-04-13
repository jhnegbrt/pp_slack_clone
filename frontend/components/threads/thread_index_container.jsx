import { connect } from 'react-redux'
import ThreadIndex from './thread_index'

const mSTP = state =>({
  threads: Object.values(state.entities.threads)
})

export default connect(mSTP)(ThreadIndex)