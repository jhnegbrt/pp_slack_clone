import {RECEIVE_PUBLIC_THREADS} from '../actions/thread_actions'

const publicThreadsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_PUBLIC_THREADS:
      return Object.assign({}, state, action.threads)
    default:
      return state
  }
}


export default publicThreadsReducer;


