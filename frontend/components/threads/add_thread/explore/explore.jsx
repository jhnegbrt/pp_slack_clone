import React from 'react'
import ExploreItemContainer from './explore_item_container'

class Explore extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchPublicChannels()
  }

  mapThread(thread){
    return <ExploreItemContainer thread={thread} key={thread.id} threadId={thread.channel_dms_id}/>
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