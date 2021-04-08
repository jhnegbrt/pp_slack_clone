import {
  RECEIVE_MESSAGE
} from '../actions/message_actions'


const MessagesReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type){
    case RECEIVE_MESSAGE:
      return {[action.message.id]: action.message.id}
    default:
      return state
  }
}


export default MessagesReducer