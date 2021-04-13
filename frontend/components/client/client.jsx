import ThreadDisplayContainer from '../threads/thread_display_container'
import ThreadIndexContainer from '../threads/thread_index_container'
import React from 'react'
class Client extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <ThreadIndexContainer></ThreadIndexContainer>
        <ThreadDisplayContainer></ThreadDisplayContainer>
      </div>
    )
  }
}

export default Client