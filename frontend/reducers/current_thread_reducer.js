import { RECEIVE_CURRENT_THREAD } from '../actions/thread_actions'


const threadsReducer = (state = {}, action) =>{
  Object.freeze(state)
    switch(action.type){
      case RECEIVE_CURRENT_THREAD:
        return Object.assign({}, state, {currentThread: action.thread.id})
      default:
        return state
  }
}

export default threadsReducer;