import {
  RECEIVE_MESSAGE
} from '../actions/message_actions'


const MessagesReducer = (state = {}, action) => {
  Object.freeze(state)
  
  switch (action.type){
    case RECEIVE_MESSAGE:
      return {[action.message.id]: action.message.id}
    case RECEIVE_ALL_POSTS:
      return Object.assign({}, state, action.messages)
    case REMOVE_POST:
      let nextState = Object.assign({}, state)
      delete nextState[action.messageId]
      return nextState
    default:
      return state
  }
}


export default MessagesReducer