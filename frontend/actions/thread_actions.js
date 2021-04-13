export const RECEIVE_CURRENT_THREAD = "RECEIVE_CURRENT_THREAD"
export const RECEIVE_ALL_THREADS = "RECEIVE_ALL_THREADS"

export const receiveCurrentThread = (data) => {
  return({
    type: RECEIVE_CURRENT_THREAD,
    data.?
  })
}

export const receiveAllThreads = (data) => {
  return({
    type: RECEIVE_ALL_THREADS,
    data.?
  })
}