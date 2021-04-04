import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Splash from './splash'
import LoginFormContainer from '../components/session_form/login_form_container'
import SignupFormContainer from '../components/session_form/signup_form_container'
import { AuthRoute } from '../util/route_util'


const App = () => (
  <Switch>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    {/* <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} /> */}
    <Route exact component={Splash}></Route>
  </Switch>

)

export default App