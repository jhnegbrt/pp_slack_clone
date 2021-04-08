import React from 'react'
import TechnologyDisplay from './technology_display'
import { NavLink } from 'react-router-dom'

class SplashTechnologies extends React.Component{

  constructor(props){
    super(props)
    this.state = ({
      tech: "react"
    })
    this.handleClick = this.handleClick.bind(this)
 
  }



  handleClick(e){
    this.setState({
      tech: e.currentTarget.querySelector('a').name
    })
  }


  render(){

    return(
      <div id="technologies">
        <h2>Technologies:</h2>
        <div className="technologies-container">
          <div className="technologies-list">
            <ul>
              <li onClick={this.handleClick} className={this.state.tech === "react" ? "selected-tech" : "unselected-tech"}>
                <a name='react'>React</a>
              </li>
              <li onClick={this.handleClick} className={this.state.tech === "ror" ? "selected-tech" : "unselected-tech"}>
                <a  name="ror">Ruby on Rails</a>
              </li>
              <li onClick={this.handleClick} className={this.state.tech === "psql" ? "selected-tech" : "unselected-tech"}>
                <a name="psql">PostgreSQL</a>
              </li>
              <li onClick={this.handleClick} className={this.state.tech === "heroku" ? "selected-tech" : "unselected-tech"}>
                <a  name="heroku">Heroku</a>
              </li>
            </ul>
          </div>
          <div className="selected-technology">
            <TechnologyDisplay tech={this.state.tech}></TechnologyDisplay>
          </div>
        </div>

      </div>
    )
  }
}

export default SplashTechnologies

{/* <li><Link 
className={this.state.tech === "react" ? "selected-tech" : "technology-element"}
onClick={this.handleClick} name="react">React</Link></li>
<Link
className={this.state.tech === "ror" ? "selected-tech" : "technology-element"}
onClick={this.handleClick} className="technology-element" activeClassName="selected-tech" name="ror">Ruby on Rails</Link> */}