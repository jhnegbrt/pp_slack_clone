import React from 'react'
import ReactDOM from 'react-dom'
import {signup} from './util/session_api_util'

document.addEventListener('DOMContentLoaded',()=>{
  const root = document.getElementById('root')
  ReactDOM.render(<h1>Welcome to Slack Clone</h1>, root)

  window.signup = signup
})