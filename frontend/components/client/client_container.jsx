import {fetchThreads } from '../../actions/thread_actions'
import Client from './client'
import {connect} from 'react-redux'


const mDTP = (dispatch) => ({
  fetchThreads: () => dispatch(fetchThreads())
})

export default connect(null, mDTP)(Client)