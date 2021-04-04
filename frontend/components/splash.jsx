import React from 'react'
import { Link } from 'react-router-dom'



function Header(){
  return(
    <div>
      <ul className="splash-header-list">
        <li><a href="#splash-main-container">Sleuth</a></li>
        <li><a href="#splash-intro">Introduction</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#technologies">Technologies</a></li>
        <li><Link to='/signup'>Sign Up</Link></li>
        <li><Link to='/login'>Sign In/Demo</Link></li>
      </ul>
  </div>
  )
}

function MainContainer(){
  return(
  <div id="splash-main-container">
    <div className="splash-intro-left">
      <h1>Sleuth: A chat-app featuring anonymous 'Sleuth' mode</h1>
      <h2>Connect with your friends, family and co-workers through your personal
        account, or as an anonymous <i>Sleuth</i> (Learn More)
      </h2>
    </div>
    <div className="splash-intro-right">
      <div className="splash-spy"></div>
    </div>
  </div>
  )
}

function IntroductionContainer(){
  return(
    <div className="introduction-container">
      <h1>take up space</h1>
      <h1>take up space</h1>
      <h1>take up space</h1>
      <h1>take up space</h1>
      <h1>take up space</h1>
      <h1>take up space</h1>
      <h1>take up space</h1>
      <h1>take up space</h1>
      <h1>take up space</h1>
      <h1>take up space</h1>
      <h1>take up space</h1>
      <h1>take up space</h1>
      <h1>take up space</h1>
      <h1>take up space</h1>
      <h1>take up space</h1>
    </div>
  )
}

function FeaturesContainer(){
  return(
    <div id="features">
      <h1>Features</h1>
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
      <IntroductionContainer></IntroductionContainer>
      <FeaturesContainer></FeaturesContainer>
      <IntroductionContainer></IntroductionContainer>
      <IntroductionContainer></IntroductionContainer>
      <Footer></Footer>
    </div>
  )
}

export default Splash