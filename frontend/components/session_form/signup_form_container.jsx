import React from 'react'
import {signup, clearSessionErrors} from '../../actions/session_actions'
import {connect} from 'react-redux'
import SessionForm from './session_form'


const mSTP = (state) => ({
  errors: state.errors.session,
  formType: "signup"

})

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearSessionErrors())
})


export default connect(
  mSTP,
  mDTP
)(SessionForm)