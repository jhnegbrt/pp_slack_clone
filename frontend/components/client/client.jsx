import ThreadDisplayContainer from '../threads/thread_display_container'
import ThreadIndexContainer from '../threads/thread_index_container'
import React from 'react'

import { Route } from 'react-router-dom'

class Client extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <Route path='/client' component={ThreadIndexContainer} />
        <Route path='/client/thread/:threadId' component={ThreadDisplayContainer} />
      </div>
    )
  }
}

export default Client