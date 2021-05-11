import {connect} from 'react-redux'
import ThreadTitle from './thread_title'



const mSTP = state =>({
  users: state.entities.users
})

export default connect(mSTP)(ThreadTitle)