export const INCREMENT_NOTIFICATIONS = "INCREMENT_NOTIFICATIONS"
export const CLEAR_NOTIFICATIONS = "CLEAR_NOTIFICATIONS"

export const incrementNotifications = threadId => ({
  threadId,
  type: INCREMENT_NOTIFICATIONS
})

export const clearNotifications = threadId => ({
  threadId,
  type: CLEAR_NOTIFICATIONS 
})

