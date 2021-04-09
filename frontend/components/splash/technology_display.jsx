import React from 'react'

class TechnologyDisplay extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>{this.props.tech}</div>
    )
  }
}

export default TechnologyDisplay