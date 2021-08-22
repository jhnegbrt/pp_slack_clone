import {RECEIVE_PUBLIC_CHANNELS} from '../../actions/thread_actions'

const publicChannelsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_PUBLIC_CHANNELS:
      return Object.assign({}, state, action.channels)
    default:
      return state
  }
}


export default publicChannelsReducer;


