import entities from './entities_reducer'
import errors from './errors_reducer'
import session from './session_reducer'
import ui from './ui_reducer'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  entities,
  ui,
  session,
  errors
})

export default rootReducer