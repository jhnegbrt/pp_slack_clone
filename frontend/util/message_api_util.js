export const createMessage = (message) =>{
  return(
    $.ajax({
      method: 'POST',
      url: 'api/messages',
      data: {message: message}
    })
  )
}

export const updateMessage = (message) =>{
  return(
    $.ajax({
      method: 'PATCH',
      url: `api/messages/${message.id}`,
      data: {message: message}
    })
  )
}

export const deleteMessage = (messageId) =>(
  $.ajax({
    method: 'DELETE',
    url: `api/messages/${messageId}`
  })
)

export const fetchMessages = () => (
  $.ajax({
    method: 'GET',
    url: 'api/messages'
  })
)