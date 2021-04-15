import * as APIUtil from '../util/thread_api_util'

export const RECEIVE_CURRENT_THREAD = "RECEIVE_CURRENT_THREAD"
export const RECEIVE_ALL_THREADS = "RECEIVE_ALL_THREADS"
export const RECEIVE_THREAD = "RECEIVE_THREAD"

export const receiveCurrentThread = (threadId) => {
  return({
    type: RECEIVE_CURRENT_THREAD,
    threadId
  })
}

export const receiveThread = (thread) =>{
  return({
    type: RECEIVE_THREAD,
    thread
  })
}

export const receiveAllThreads = (threads) => {
  return({
    type: RECEIVE_ALL_THREADS,
    threads
  })
}

export const createThread = (data) => dispatch => {
  return(APIUtil.createThread(data)
    .then(thread => dispatch(receiveCurrentThread(thread.id)))
    // .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
  )
}

export const fetchThreads = () => dispatch => (
  APIUtil.fetchThreads()
    .then((threads) => dispatch(receiveAllThreads(threads)))
    // .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)