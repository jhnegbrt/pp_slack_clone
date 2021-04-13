export const RECEIVE_CURRENT_THREAD = "RECEIVE_CURRENT_THREAD"
export const RECEIVE_ALL_THREADS = "RECEIVE_ALL_THREADS"

export const receiveCurrentThread = (threadId) => {
  return({
    type: RECEIVE_CURRENT_THREAD,
    threadId
  })
}

export const receiveAllThreads = (data) => {
  return({
    type: RECEIVE_ALL_THREADS,
    data
  })
}