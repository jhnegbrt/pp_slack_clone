import React from 'react'
import ThreadIndexItem from './thread_index_item'
import CreateThreadFormContainer from './create_thread_form_container'


class ThreadIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchThreads()
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
        <CreateThreadFormContainer />
      </div>
    )
  }
}

export default ThreadIndex