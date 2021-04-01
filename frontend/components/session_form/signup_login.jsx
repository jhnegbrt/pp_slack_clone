import React from 'react'
import SignupFormContainer from './signup_form_container'
import LoginFormContainer from './login_form_container'

class SignupLogin extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='SignupLogin'>
        <SignupFormContainer></SignupFormContainer>
        <LoginFormContainer></LoginFormContainer>
      </div>
    )
  }
}

export default SignupLogin