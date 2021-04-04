import React from 'react'
import {signup, clearErrors} from '../../actions/session_actions'
import {connect} from 'react-redux'
import SessionForm from './session_form'
import { Link } from 'react-router-dom'


const mSTP = (state) => ({
  errors: state.errors.session,
  formType: "signup"

})

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
})


export default connect(
  mSTP,
  mDTP
)(SessionForm)