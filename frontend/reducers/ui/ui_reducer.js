import { combineReducers } from 'redux'
import currentThreadReducer from './current_thread_reducer'

const uiReducer = combineReducers({
  currentThread: currentThreadReducer,
});

export default uiReducer