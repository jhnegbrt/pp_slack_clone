import React from 'react'
import MessageForm from './message_form'
import {connect} from 'react-redux'
import { createMEssage } from '../../actions/message_actions'

const mSTP = (store) => ({
  post: {
    content = ""
  }
})

const mDTP = (dispatch) => ({
  submit: (message)=> dispatch(createMessage(message))
})

export default connect(mSTP, mDTP)(MessageForm)