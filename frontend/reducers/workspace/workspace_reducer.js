import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import publicChannelsReducer from './public_channels_reducer'
import messagesReducer from './messages_reducer'
import threadsReducer from './threads_reducer'

const workspaceReducer = combineReducers({
  messages: messagesReducer,
  threads: threadsReducer,
  users: usersReducer,
  publicChannels: publicChannelsReducer
  
})

export default workspaceReducer
