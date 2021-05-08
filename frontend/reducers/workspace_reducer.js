import { combineReducers } from 'redux'
import workspaceUsersReducer from './workspace_users_reducer'
import publicThreadsReducer from './public_threads_reducer'

const workspaceReducer = combineReducers({
  users: workspaceUsersReducer,
  publicThreads: publicThreadsReducer
  
})

export default workspaceReducer
