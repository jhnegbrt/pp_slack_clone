const threadsReducer = (state = {}, action) =>{
  Object.freeze(state){
    switch(action.type){
      case RECEIVE_CURRENT_THREAD:
        return Object.assign({}, state, {[action.thread.id]: action.thread})
      default:
        return state
    }
  }
}

export default threadsReducer;