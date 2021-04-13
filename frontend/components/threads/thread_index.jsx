import React from 'react'
import ThreadIndexItem from './thread_index_item'

class ThreadIndex extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    const { threads } = this.props
    return(
      <div className="thread-index">
        <ul>
          {
            threads.map((thread) =>(
              <ThreadIndexItem
                thread={thread}
                key={thread.id}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}