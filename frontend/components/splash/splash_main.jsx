import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link'

function SplashMain(){
  return(
  <div id="main">
    <div className="splash-intro-left">
      <h1>Sleuth: A chat-app featuring anonymous 'Sleuth' mode</h1>
      <h2>Connect with your friends, family and co-workers through your personal
        account, or as an anonymous <i>Sleuth</i> <NavLink to="#intro">(Learn More)</NavLink>
      </h2>
    </div>
    <div className="splash-intro-right">
      <div className="splash-spy"></div>
    </div>
  </div>
  )
}

export default SplashMain