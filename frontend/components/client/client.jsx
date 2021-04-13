import threadDisplayContainer from '../threads/thread_display_container'
import threadIndexContainer from '../threads/thread_index_container'

class Client extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <threadIndexContainer></threadIndexContainer>
        <threadDisplayContainer></threadDisplayContainer>
      </div>
    )
  }
}

export default Client