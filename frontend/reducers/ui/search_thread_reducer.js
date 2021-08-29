import { RECEIVE_SEARCH_THREAD, CLEAR_SEARCH_THREAD } from "../../actions/search_thread_actions";

const searchThreadReducer = (state = {}, action) => {

  Object.freeze(state)
  switch(action.type){
    case RECEIVE_SEARCH_THREAD:
    case CLEAR_SEARCH_THREAD:

    default:
      return state
  }

}

export default searchThreadReducer