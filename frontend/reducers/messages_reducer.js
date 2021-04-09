import {
  RECEIVE_MESSAGE, REMOVE_POST, RECEIVE_ALL_MESSAGES
} from '../actions/message_actions'


const MessagesReducer = (state = {}, action) => {
  Object.freeze(state)
  
  switch (action.type){
    case RECEIVE_MESSAGE:
      return {[action.message.id]: action.message.id}
    case RECEIVE_ALL_MESSAGES:
      return Object.assign({}, state, action.messages)
    case REMOVE_POST:
      let nextState = Object.assign({}, state)
      delete nextState[action.messageId]
      return nextState;
    default:
      return state;
  }
}


export default MessagesReducer