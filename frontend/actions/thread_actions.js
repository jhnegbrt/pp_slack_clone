import * as APIUtil from '../util/thread_api_util'

export const RECEIVE_CURRENT_THREAD = "RECEIVE_CURRENT_THREAD"
export const RECEIVE_ALL_THREADS = "RECEIVE_ALL_THREADS"

export const receiveCurrentThread = (thread) => {
  debugger
  return({
    type: RECEIVE_CURRENT_THREAD,
    thread
  })
}

const receiveAllThreads = (data) => {
  return({
    type: RECEIVE_ALL_THREADS,
    data
  })
}

export const createThread = (data) => {
  debugger
  return(APIUtil.createThread(data)
    .then(thread => dispatch(receiveCurrentThread(thread)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
  )
}