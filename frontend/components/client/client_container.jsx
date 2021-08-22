import {fetchThreads, fetchPublicChannels } from '../../actions/thread_actions'
import Client from './client'
import {connect} from 'react-redux'


const mDTP = (dispatch) => ({
  fetchThreads: () => dispatch(fetchThreads()),
  fetchPublicChannels: () => dispatch(fetchPublicChannels())
})

export default connect(null, mDTP)(Client)