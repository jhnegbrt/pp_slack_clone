import React from 'react'
import createMessagesConnection from '../../../util/create_messages_connection'

class Explore extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchPublicChannels()
  }

  mapThread(thread){
    return <li>{thread}</li>
    // return <PublicThreadsItem />
  }

  render(){

    const { publicChannels } = this.props
    debugger
    return(
      <ul className='publicChannels'>
        {publicChannels.map(this.mapThread)}
      </ul>
    )
  }

}

export default Explore