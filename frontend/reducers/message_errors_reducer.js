import { RECEIVE_MESSAGE_ERRORS, CLEAR_MESSAGE_ERRORS } from '../actions/message_actions'

export default (state = [], action) =>{
  debugger
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_MESSAGE_ERRORS:
      return action.errors
    case CLEAR_MESSAGE_ERRORS:
      return [];
    default:
      return state
  }
}