import { connect } from  'react-redux'
import SessionForm from './session_form'
import { login, clearErrors } from '../../actions/session_actions'
import { Link } from 'react-router-dom'
import React from 'react'

const mSTP = (state) => ({
  errors: state.errors.session,
  formType: "signin"
})

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
})


export default connect(
  mSTP,
  mDTP
)(SessionForm);
