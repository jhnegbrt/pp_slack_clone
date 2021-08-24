import React from 'react'
import { Link } from 'react-router-dom'
import { findThreadOrChannel } from '../../util/action_cable_util/channel_util'


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
    this.logout = this.logout.bind(this)
  }

  handleDropdown(){
    this.setState({
      dropDown: !this.state.dropDown
    })
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }


  logout(){
    App.cable.subscriptions.subscriptions = []
    this.props.logout()
      .then(()=>window.location.reload(false))
  }

  render(){
    let link1;
    let link2;
    let width = window.innerWidth
    if(this.props.currentUser){
      link1 = <li><span onClick={this.logout}>Logout</span></li>
      link2 = <li><Link id="app-link" to='/client/explore'>App</Link></li>
    } else {
      link1 = <li className="blink-me"><Link to='/signup'>Sign Up</Link></li>
      link2 = <li><Link to='/login'>Sign In/Demo</Link></li>
    }

    let desktopNav = (
      <div>
      <ul className="splash-header-list">
        <li id="spy-icon"><a href="#main"><img src={Spy}></img></a></li>
        <li><a id="sleuth-item" href="#main">Sleuth</a></li>
        <li><a href="#intro" >Introduction</a></li>
        {link2}
        {link1}
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
              <li onClick={this.handleDropdown}>Close Menu</li>
            </ul>
            {link1}
            {link2}

        </ul>

      </div>
    )

    return(
      <div className="splash-page">

        {width > 768 ? desktopNav : mobileNav}
        <SplashMain></SplashMain>
        <SplashIntro></SplashIntro>
        <SplashFooter></SplashFooter>
      </div>
    )
  }
}

export default Splash