export const createThread = (thread) =>{
  return(
    $.ajax({
      method: 'POST',
      url: 'api/channel_dms',
      data: {channel_dm: thread}
    })
  )
}

export const fetchThreads = () => {
  return(
    $.ajax({
      method: 'GET',
      url: 'api/channel_dms'
    })
  )
}