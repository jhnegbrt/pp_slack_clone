import React from 'react'
import {signup} from '../../actions/session_actions'
import {connect} from 'react-redux'
import SessionForm from './session_form'
import { Link } from 'react-router-dom'


const mSTP = (state) => ({
  errors: state.errors.session,
  formType: "signup"

})

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(signup(user))
})

// class SignupForm extends React.Component{
//   render(){
//     return(
//       <div>
//         <SessionForm></SessionForm>
//         <p>Already have an account? Log-In</p><Link to="/login">Here</Link>

//       </div>

//     )
//   }
// }

export default connect(
  mSTP,
  mDTP
)(SessionForm)