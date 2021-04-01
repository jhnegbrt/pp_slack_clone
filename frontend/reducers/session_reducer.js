import RECEIVE_CURRENT_USER from '../actions/session_actions'
import LOGOUT_CURRENT_USER from '../actions/session_actions'

const _nullUser = Object.freeze({
  id: null
})

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVER_CURRENT_USER:
      return Object.assign({}, {id: action.user.id})
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state
  }
}


export default sessionReducer
