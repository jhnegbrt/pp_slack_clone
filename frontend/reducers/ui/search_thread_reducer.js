import { RECEIVE_SEARCH_THREAD, CLEAR_SEARCH_THREAD } from "../../actions/search_thread_actions";

const searchThreadReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_SEARCH_THREAD:
      return {id: action.id}
    case CLEAR_SEARCH_THREAD:
      return {}
    default:
      return state
  }

}

export default searchThreadReducer