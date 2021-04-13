import threadDisplayContainer from '../threads/thread_display_container'
import threadIndex from '../threads/index'

class Client extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <threadIndex></threadIndex>
        <threadDisplayContainer></threadDisplayContainer>
      </div>
    )
  }
}

export default Client