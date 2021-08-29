export const RECEIVE_SEARCH_THREAD = "RECEIVE_SEARCH_THREAD"
export const CLEAR_SEARCH_THREAD = "CLEAR_SEARCH_THREAD"

export const receiveSearchThread = id => ({
  type: RECEIVE_SEARCH_THREAD,
  id
})

export const clearSeatchThread = () =>({
  type: CLEAR_SEARCH_THREAD
})