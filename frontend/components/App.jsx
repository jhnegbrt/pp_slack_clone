import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Splash from './splash'

const App = () => (
  <Switch>
    <Route exact component={Splash}></Route>
    <div>
      <h1 className="slack">Slack</h1>
      <h1 className="sleuth">Sleuth</h1>
    </div>
  </Switch>
)

export default App