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
    this.state = ({
      dropDown: false
    })
    this.handleDropdown = this.handleDropdown.bind(this)
  }

  handleDropdown(){

    this.setState({
      dropDown: !this.state.dropDown
    })
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  render(){
    let signUpLink;
    let demoLink
    let width = window.innerWidth
    if(this.props.currentUser){
      signUpLink = (
        <li><span onClick={this.props.logout}>Logout</span></li>
      )
    } else {
      signUpLink = (
        <li className="blink-me"><Link to='/signup'>Sign Up</Link></li>
      )
    }
    if(this.props.currentUser){
    } else {
      demoLink = (
        <li><Link to='/login'>Sign In/Demo</Link></li>
      )
    }

    let desktopNav = (
      <div>
      <ul className="splash-header-list">
        <li id="spy-icon"><a href="#main"><img src={Spy}></img></a></li>
        <li><a id="sleuth-item" href="#main">Sleuth</a></li>
        <li><a href="#intro" >Introduction</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#technologies">Technologies</a></li>

      </ul>
    </div>
    )

    let mobileNav = (
      <div>
        <ul className="splash-header-list-mobile">
          <li id="spy-icon"><a href="#main"><img src={Spy}></img></a></li>
          <li onClick={this.handleDropdown}>Menu</li>
            <ul className={this.state.dropDown === true ? "mobile-nav-menu-active" :"mobile-nav-menu"}>
              <li onClick={this.handleDropdown}><a href="#intro" >Introduction</a></li>
              <li onClick={this.handleDropdown}><a href="#features">Features</a></li>
              <li onClick={this.handleDropdown}><a href="#technologies">Technologies</a></li>
              <li onClick={this.handleDropdown}>Close Menu</li>
            </ul>
          {signUpLink}
          {demoLink}
        </ul>

      </div>
    )

    return(
      <div className="splash-page">

        {width > 768 ? desktopNav : mobileNav}

        
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


            {/* <li><NavLink id="sleuth-item" to="#main"activeClassName="active-link">Sleuth</NavLink></li>
            <li><NavLink to="#intro" activeClassName="active-link">Introduction</NavLink></li>
            <li><NavLink to="#features" activeClassName="active-link">Features</NavLink></li>
            <li><NavLink to="#technologies" activeClassName="active-link">Technologies</NavLink></li> */}


