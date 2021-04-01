export const signup = (user) =>(
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user: user}
  })
)

export const signin = (user) =>(
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user: user}
  })
)

export const signout = () =>(
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
  })
)