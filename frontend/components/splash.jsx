import React from 'react'

function Header(){
  return(
    <div className="splash-header">
      <ul>
        <li>Sleuth</li>
        <li>Sign Up</li>
        <li>Sign In/Demo</li>
      </ul>
  </div>
  )
}

function MainContainer(){
  return(
  <div className="splash-main-container">
    <h1>Main Container</h1>
  </div>
  )
}

function Footer(){
  return(
    <div className="splash-footer">
    <ul>
      <li>portfolio website</li>
      <li>linked in</li>
      <li>resume</li>
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