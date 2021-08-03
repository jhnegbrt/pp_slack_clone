import {connect} from 'react-redux'
import Explore from './explore'
import {fetchPublicChannels} from '../../../../actions/thread_actions'

const mSTP = state => ({
  usersThreads: state.threads,
  publicChannels: Object.values(state.entities.publicChannels)
})

const mDTP = dispatch => ({

  fetchPublicChannels: () => dispatch(fetchPublicChannels())

})

export default connect(mSTP, mDTP)(Explore)