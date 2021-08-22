import {
  RECEIVE_MESSAGE, REMOVE_MESSAGE, RECEIVE_MESSAGES, CLEAR_MESSAGES
} from '../../actions/message_actions'


const MessagesReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type){
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, {[action.message.id]: action.message})
    case RECEIVE_MESSAGES:
      return Object.assign({}, action.messages)
    case REMOVE_MESSAGE:
      let nextState = Object.assign({}, state)
      delete nextState[action.message.id]
      return nextState;
    // case CLEAR_MESSAGES:
    //   if (Object.values(state).length === 0){
    //     return state
    //   }else {
    //     let clearedMessages = Object.assign({})
    //     return clearedMessages
    //   }
    default:
      return state;
  }
}


export default MessagesReducer