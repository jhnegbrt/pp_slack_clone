import MessageForm from './message_form'
import { connect } from 'react-redux'
import { fetchMessage, updateMessage } from '../../actions/message_actions'

class EditMessageForm extends React.Component{
  
  componentDidMount(){
    this.props.fetchMessage(this.props.match.params.messageId)
  }

  render(){
    const { submit, message } = this.props

    if (!message) return null;
    return(
      
      <MessageForm submit={submit} message={message} ></MessageForm>

    );
  }
}

const mSTP = (state) => ({
  message: state.messages[ownProps.match.params.messageId]
})

const mDTP = (dispatch) => ({
  submit: (message)=> dispatch(updateMessage(message)),
  fetchMessage: (messageId) => dispatch(fetchMessage(messageId))
})


export default connect(mSTP, mDTP)(EditMessageForm)