import React from 'react'
import ExploreItemContainer from './explore_item_container'

class Explore extends React.Component{
  constructor(props){
    super(props)
  }

  mapThread(thread){
    console.log(thread.id)
    return (
    <ExploreItemContainer 
      thread={thread} 
      key={thread.id} 
      threadId={thread.channel_dms_id}
      member={this.props.usersChannels[thread.id] === undefined ? false : true}
    />)
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
            {publicChannels.map(this.mapThread, this)}
          </ul>
        </div>
      </div>

    )
  }

}

export default Explore