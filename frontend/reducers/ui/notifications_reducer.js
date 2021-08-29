import { INCREMENT_NOTIFICATIONS, CLEAR_NOTIFICATIONS } from "../../actions/notification_actions";

const notificationsReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch(action.type){
    case INCREMENT_NOTIFICATIONS:
      let currentCount = state[action.threadId]
      nextState[action.threadId] = currentCount + 1
      return nextState
    case CLEAR_NOTIFICATIONS:
      nextState[action.threadId] = 0
      return nextState
    default:
      return state
  }
}

export default notificationsReducer