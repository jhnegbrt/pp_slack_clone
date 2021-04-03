import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Splash from './splash'
import LoginFormContainer from '../components/session_form/login_form_container'
import SignupFormContainer from '../components/session_form/signup_form_container'


const App = () => (
  <Switch>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    <Route exact component={Splash}></Route>
  </Switch>

)

export default App