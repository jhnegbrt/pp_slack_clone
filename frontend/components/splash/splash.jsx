import React from 'react'
import { Link } from 'react-router-dom'
import {NavHashLink as NavLink } from 'react-router-hash-link'


import Spy from '../../../app/assets/images/spy_icon.svg'
import SplashMain from './splash_main'
import SplashIntro from './splash_intro'
import SplashFooter from './splash_footer'
import SplashFeatures from './splash_features'
import SplashTechnologies from './splash_technologies'


class Splash extends React.Component{
  constructor(props){
    super(props)
  }

  // handleScroll(){
  //   let scrollPos =

  // }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
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
        <li className="blink-me"><Link to='/signup'>Sign Up</Link></li>
          
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
            <li id="spy-icon"><a href="#main"><img src={Spy} ></img></a></li>
            <li><NavLink id="sleuth-item" activeClassName="active-link" to="#main">Sleuth</NavLink></li>
            <li><NavLink to="#intro" activeClassName="active-link" >Introduction</NavLink></li>
            <li><NavLink to="#features" activeClassName="active-link" >Features</NavLink></li>
            <li><NavLink to="#technologies" activeClassName="active-link" >Technologies</NavLink></li>
            {ourVar}
            {ourVariable}
          </ul>
        </div>


        
        <SplashMain></SplashMain>
        <SplashIntro></SplashIntro>
        <SplashFeatures></SplashFeatures>
        <SplashIntro></SplashIntro>
        <SplashTechnologies></SplashTechnologies>
        <SplashIntro></SplashIntro>
        <SplashFooter></SplashFooter>
      </div>
    )
  }
}

export default Splash



{/* <div>
<ul className="splash-header-list">
  <li id="spy-icon"><a href="#main"><img src={Spy} ></img></a></li>
  <li><a className={this.state.selected === 'main' ? 'selected' : ""} href="#main" id="sleuth-item">Sleuth</a></li>
  <li><a id="selected" href="#main" id="sleuth-item">Sleuth</a></li>
  <li><a className={this.state.selected === 'intro' ? 'selected' : ""} href="#intro">Introduction</a></li>
  <li><a className={this.state.features ==='features' ? 'selected' : ""} href="#features">Features</a></li>
  <li><a className={this.state.main === 'technologies' ? 'selected' : ""} href="#technologies">Technologies</a></li>
  {ourVar}
  {ourVariable}
</ul>
</div> */}


