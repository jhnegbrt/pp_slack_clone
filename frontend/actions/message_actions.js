import * as APIUtil from '../util/message_api_util'

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"

const receiveMessage  = (message) => ({
  type: "RECEIVE_MESSAGE",
  message
})

export const createMessage = formMessage => dispatch => {
  return(
    APIUtil.createMessage(formMessage)
      .then(message => dispatch(receiveMessage(message)))
      .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
  )
}