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