import { combineReducers } from 'redux'
import workspaceUsersReducer from './workspace_users_reducer'

const workspaceReducer = combineReducers({
  users: workspaceUsersReducer
})

export default workspaceReducer