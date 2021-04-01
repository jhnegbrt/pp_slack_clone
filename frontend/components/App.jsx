import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Splash from './splash'
import LoginFormContainer from '../components/session_form/login_form_container'
import SignupFormContainer from '../components/session_form/signup_form_container'

const App = () => (
  <Switch>
    <Route path="/signin" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    <Route exact component={Splash}></Route>
    <div>
      <h1 className="slack">Slack</h1>
      <h1 className="sleuth">Sleuth</h1>
    </div>
  </Switch>

)

export default App