import {connect} from 'react-redux'
import Explore from './explore'

const mSTP = state => ({
  publicChannels: Object.values(state.workspace.publicChannels),
  usersChannels: state.workspace.threads
})

export default connect(mSTP, null)(Explore)