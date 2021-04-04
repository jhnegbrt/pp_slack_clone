import React from 'react'
import {connect} from 'react-redux'
import Splash from './splash'


const mSTP = (state) => ({
  errors: state.errors.session,
  formType: "signup"

})

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(Splash)