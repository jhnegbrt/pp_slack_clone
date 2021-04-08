import * as APIUtil from '../util/message_api_util'

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const REMOVE_MESSAGE = "REMOVE_MESSAGE"
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS"
export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES"
export const CLEAR_MESSAGE_ERRORS = "CLEAR_MESSAGE_ERRORS"


const receiveErrors = (errors) => {
  return({
    type: RECEIVE_MESSAGE_ERRORS,
    errors
  })
}

export const clearMessageErrors = () => {
  return({
    type: CLEAR_MESSAGE_ERRORS
  })
}

const receiveAllMessages = (messages) => ({
  type: RECEIVE_ALL_MESSAGES,
  messages
})  

const receiveMessage  = (message) => ({
  type: RECEIVE_MESSAGE,
  message
})

const deleteMessage = (messageId) => ({
  type: REMOVE_MESSAGE,
  messageId
})

export const fetchMessage = (messageId) => dispatch => (
  APIUtil.fetchMessage(messageId)
    .then((message) => dispatch(receiveMessage(message)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const fetchMessages = () => dispatch => (
  APIUtil.fetchMessages()
    .then((messages) => dispatch(receiveAllMessages(messages)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const deleteMessage = (messageId) => dispatch => (
  APIUtil.deleteMessage(messageId)
    .then(() => dispatch(deleteMessage(messageId)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const createMessage = formMessage => dispatch => {
  return(
    APIUtil.createMessage(formMessage)
      .then(message => dispatch(receiveMessage(message)))
      .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
  )
}

export const updateMessage = formMessage => dispatch => {
  return(
    APIUtil.updateMessage(formMessage)
      .then(message => dispatch(receiveMessage(message)))
      .fail(errors => dispatch(receiveErrors(errors)))
  )
}