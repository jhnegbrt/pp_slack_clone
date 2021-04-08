import * as APIUtil from '../util/message_api_util'

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS"


const receiveErrors = (errors) => {
  return({
    type: RECEIVE_SESSION_ERRORS,
    errors
  })
}

const receiveMessage  = (message) => ({
  type: RECEIVE_MESSAGE,
  message
})

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