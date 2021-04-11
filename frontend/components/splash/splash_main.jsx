import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link'

function SplashMain(){
  return(
  <div id="main">
    <div className="main-left">
      <h1>Sleuth: messaging undercover</h1>
      <h2>Connect with your friends, family and co-workers through your personal
        account, or as the anonymous <i>Sleuth</i> <NavLink to="#intro">(Learn More)</NavLink>
      </h2>
    </div>
    <div className="main-right">
      <div className="splash-spy"></div>
    </div>
  </div>
  )
}

export default SplashMain