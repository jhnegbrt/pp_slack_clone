import * as APIUtil from '../util/message_api_util'

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const REMOVE_MESSAGE = "REMOVE_MESSAGE"
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS"
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
export const CLEAR_MESSAGE_ERRORS = "CLEAR_MESSAGE_ERRORS"
export const CLEAR_MESSAGES = "CLEAR_MESSAGES"


const receiveErrors = (errors) => {
  return({
    type: RECEIVE_MESSAGE_ERRORS,
    errors
  })
}

const clearMessageErrors = () => ({
    type: CLEAR_MESSAGE_ERRORS
})

export const clearMessages = () => ({
  type: CLEAR_MESSAGES
})

export const receiveMessages = (data) => ({
  type: RECEIVE_MESSAGES,
  messages: data.messages
})


export const receiveMessage = (message) => {
  return({  
    type: RECEIVE_MESSAGE,
    message
  })

}

export const removeMessage = (message) => {
  return({
    type: REMOVE_MESSAGE,
    message
  })
}

export const fetchMessage = (messageId) => dispatch => (
  APIUtil.fetchMessage(messageId)
    .then((message) => dispatch(receiveMessage(message)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)

// export const fetchMessages = () => dispatch => (
//   APIUtil.fetchMessages()
//     .then((messages) => dispatch(receiveAllMessages(messages)))
//     .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
// )

export const deleteMessage = (messageId) => dispatch => (
  APIUtil.deleteMessage(messageId)
    .then(() => dispatch(removeMessage(messageId)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)


//I believe I can get rid of this code, test later
export const createMessage = formMessage => dispatch => {
  return(
    APIUtil.createMessage(formMessage)
      .then(message => dispatch(receiveMessage(message)))
      .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
  )
}

// export const updateMessage = formMessage => dispatch => {
//   return(
//     APIUtil.updateMessage(formMessage)
//       .then(message => dispatch(receiveMessage(message)))
//       .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
//   )
// }