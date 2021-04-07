import React from 'react'
import { Link } from 'react-router-dom'

// class LoginOrLogout extends React.Compoent{
//   constructor(props){
//     super(props)
//   }


//   render(){

//   }

// }


// class Header extends React.Component{
//   constructor(props){
//     super(props)
//   }

//   render(){
//     return(

//     )

//   }
// }

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

class Splash extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    let ourVar;
    let ourVariable
    if(this.props.currentUser){
      ourVar = (
        <li><span onClick={this.props.logout}>Logout</span></li>
      )
    } else {
      ourVar = (
        <li><Link to='/signup'>Sign Up</Link></li>
          
      )
    }
    if(this.props.currentUser){
    } else {
      ourVariable = (
        <li><Link to='/login'>Sign In/Demo</Link></li>
      )
    }
    return(
      <div className="splash-page">
        <div>
            <ul className="splash-header-list">
            <li><a href="#splash-main-container">Sleuth</a></li>
            <li><a href="#splash-intro">Introduction</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#technologies">Technologies</a></li>
            {ourVar}
            {ourVariable}
            {/* <li><Link to='/signup'>Sign Up</Link></li>
            <li><Link to='/login'>Sign In/Demo</Link></li>
            <LoginOrLogout currentUser={this.props.currentUser}></LoginOrLogout> */}
          </ul>
        </div>
        {/* <Header currentUser={this.props.currentUser}></Header> */}
        <MainContainer></MainContainer>
        <IntroductionContainer></IntroductionContainer>
        <FeaturesContainer></FeaturesContainer>
        <IntroductionContainer></IntroductionContainer>
        <IntroductionContainer></IntroductionContainer>
        <Footer></Footer>
      </div>
    )
  }
}

export default Splash