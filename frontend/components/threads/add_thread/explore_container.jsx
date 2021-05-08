import {connect} from 'react-redux'
import Explore from './browse_channels'
import {fetchPublicChannels} from '../../actions'

const mSTP = state => ({
  publicChannels: state.entities.workspace.publicChannels
})

const mDTP = dispatch => ({

  fetchPublicChannels: () => dispatch(fetchPublicChannels())

})

export default connect(mSTP, mDTP)(Explore)