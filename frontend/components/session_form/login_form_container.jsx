import { connect } from  'react-redux'
import SessionForm from './session_form'
import { login } from '../../actions/session_actions'
import { Link } from 'react-router-dom'
import React from 'react'

const mSTP = (state) => ({
  errors: state.errors.session,
  formType: "signin"
})

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user))  
})

// class LoginForm extends React.Component{
//   constructor(props){
//     super(props)
//   }

//   render(){
//     return(
//       <div>
//       <SessionForm></SessionForm>
//       <p>Need to </p><Link to="/signup">Sign-Up</Link>?
//     </div>
//     )
//   }
// }



export default connect(
  mSTP,
  mDTP
)(SessionForm);
