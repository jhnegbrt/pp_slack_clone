import AddMembersModal from './add_members_modal'
import {connect} from 'react-redux'

const mSTP = state => ({
  users: state.entities.workspace.users,
  currentUser: state.session.id
})

export default connect(mSTP)(AddMembersModal)