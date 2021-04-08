import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SplashContainer from './splash/splash_container'
import LoginFormContainer from '../components/session_form/login_form_container'
import SignupFormContainer from '../components/session_form/signup_form_container'
import { AuthRoute } from '../util/route_util'

const NotFoundPage = () => {
  return <h1>404 Page Not Found</h1>;
}

const App = () => (
  <Switch>
    <Route exact path='/' component={SplashContainer}></Route>
    <Route exact path='/intro' component={SplashContainer}></Route>
    <Route exact path='/main' component={SplashContainer}></Route>
    <Route exact path='/features' component={SplashContainer}></Route>
    <Route exact path='/technologies' component={SplashContainer}></Route>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    
    <Route component={NotFoundPage} />
  </Switch>

)

export default App