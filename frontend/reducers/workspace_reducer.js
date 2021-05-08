import { combineReducers } from 'redux'
import workspaceUsersReducer from './workspace_users_reducer'
import publicChannelsReducer from './public_channels_reducer'

const workspaceReducer = combineReducers({
  users: workspaceUsersReducer,
  publicChannels: publicChannelsReducer
  
})

export default workspaceReducer
