import {RECEIVE_CURRENT_THREAD, RECEIVE_ALL_THREADS } from '../actions/thread_actions'


const threadsReducer = (state = {}, action) =>{
  Object.freeze(state)
    switch(action.type){
      case RECEIVE_ALL_THREADS:
        return Object.assign({}, state, action.threads)
      default:
        return state
  }
}

export default threadsReducer;