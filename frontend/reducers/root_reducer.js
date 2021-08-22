import workspace from './workspace/workspace_reducer'
import errors from './errors/errors_reducer'
import session from './session_reducer'
import ui from './ui/ui_reducer'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  workspace,
  ui,
  session,
  errors
})

export default rootReducer