import React from 'react'
import TechnologyDisplay from './technology_display'

class SplashTechnologies extends React.Component{

  constructor(props){
    super(props)
    this.state = ({
      technology: "react"
    })
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    // debugger
    e.preventDefault()
    this.setState({
      technology: [e.target.name]
    }, () => {console.log(this.state.technology)})
  }


  render(){
    return(
      <div id="technologies">
        <h2>Technologies:</h2>
        <div className="technologies-container">
          <div className="technologies-left">
            <ul>
              <li><a onClick={this.handleClick} name="react">React</a></li>
              <li><a onClick={this.handleClick} name="ror">Ruby on Rails</a></li>
              <li><a onClick={this.handleClick} name="psql">PostgreSQL</a></li>
              <li><a onClick={this.handleClick} name="heroku">Heroku</a></li>
            </ul>
            <TechnologyDisplay technology={this.state.technology}></TechnologyDisplay>
          </div>
        </div>

      </div>
    )
  }
}

export default SplashTechnologies