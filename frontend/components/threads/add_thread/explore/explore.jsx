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
    debugger
    return <ExploreItemContainer
     joined={joined}
     thread={thread} 
     key={thread.id} 
     threadId={thread.channel_dms_id}
    />
  }

  render(){
    const { publicChannels } = this.props
    const channelCount = publicChannels.length

    return(
      <div className="explore">
        <div className="explore-header">
          <h2>Channel browser</h2>
        </div>
        <div className="channel-count">{channelCount} channels</div>
        <div className="explore-item-container">
          <ul className='public-channels'>
            {publicChannels.map(this.mapThread)}
          </ul>
        </div>
      </div>

    )
  }

}

export default Explore