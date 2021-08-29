import { combineReducers } from 'redux'
import currentThreadReducer from './current_thread_reducer'
import notificationsReducer from './notifications_reducer';
const uiReducer = combineReducers({
  currentThread: currentThreadReducer,
  notifications: notificationsReducer
});

export default uiReducer