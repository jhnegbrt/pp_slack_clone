import { combineReducers } from 'redux'
import messagesReducer from './messages_reducer'
import threadsReducer from './threads_reducer'
import workspaceUsersReducer from './workspace_users_reducer'
import publicChannelsReducer from './public_channels_reducer'

const entitiesReducer = combineReducers({
  messages: messagesReducer,
  threads: threadsReducer,
  users: workspaceUsersReducer,
  publicChannels: publicChannelsReducer
});

export default entitiesReducer