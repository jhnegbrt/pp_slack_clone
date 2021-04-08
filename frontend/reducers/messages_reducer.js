import {
  RECEIVE_MESSAGE
} from '../actions/message_actions'


const MessagesReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type){
    case RECEIVE_MESSAGE:
      return {[action.message.id]: action.message.id}
    case RECEIVE_MESSAGE_ERRORS:
      return
    default:
      return state
  }
}


export default MessagesReducer