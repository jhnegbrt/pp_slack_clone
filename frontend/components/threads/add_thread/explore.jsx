import React from 'react'
import createMessagesConnection from '../../../util/create_messages_connection'

class Explore extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchPublicThreads()
  }

  mapThread(thread){
    <li>{thread.title}</li>
    // return <PublicThreadsItem />
  }

  render(){

    const { publicChannels } = this.props
      
    return(
      <ul>
        {publicChannels.map(this.mapThread)}
      </ul>
    )
  }

}

export default Explore