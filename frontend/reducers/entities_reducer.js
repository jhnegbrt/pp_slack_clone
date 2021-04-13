import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import messagesReducer from './messages_reducer'
import threadsReducer from './threads_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  messages: messagesReducer,
  threads: threadsReducer
});

export default entitiesReducer