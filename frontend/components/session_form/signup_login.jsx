import React from 'react'
import SignupFormContainer from './signup_form_container'
import LoginFormContainer from './login_form_container'

class SignupLogin extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='signup-login-container'>
        <h1>We</h1>
        <div className='signup-login'>
          <SignupFormContainer></SignupFormContainer>
          <LoginFormContainer></LoginFormContainer>
        </div>
      </div>
    )
  }
}

export default SignupLogin