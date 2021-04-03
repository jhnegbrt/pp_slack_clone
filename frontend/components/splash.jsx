import React from 'react'

function Header(){
  return(
    <div>
      <ul className="splash-header-list">
        <li>Sleuth</li>
        <li>Introduction</li>
        <li>Features</li>
        <li>Technologies</li>
        <li>Sign Up</li>
        <li>Sign In/Demo</li>
      </ul>
  </div>
  )
}

function MainContainer(){
  return(
  <div className="splash-main-container">
    <div>Sleuth</div>
    <div>IMG</div>
  </div>
  )
}

function Footer(){
  return(
    <div>
    <ul className="splash-footer-list">
      <li>portfolio website</li>
      <li>linked in</li>
      <li>resume</li>
      <li>github</li>
    </ul>
  </div>
  )
}

const Splash = () =>{
  return(
    <div className="splash-page">
      <Header></Header>
      <MainContainer></MainContainer>
      <Footer></Footer>
    </div>
  )
}

export default Splash