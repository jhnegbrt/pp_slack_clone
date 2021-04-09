import {connect} from 'react-redux'
import React from 'react'
import MessageIndexItem from './message_index_item'


const mSTP = state =>{
  // debugger
  return({
    currentUserId: state.session.id
  })
}


export default connect(mSTP)(MessageIndexItem)