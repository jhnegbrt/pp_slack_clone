export const createThread = (thread) =>{
  return(
    $.ajax({
      method: 'POST',
      url: 'api/channel_dms',
      data: {channel_dm: thread}
    })
  )
}