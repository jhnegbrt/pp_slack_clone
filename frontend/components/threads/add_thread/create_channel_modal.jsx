import React from 'react'
import NewChannelModalContainer from './new_channel_modal_container'
import AddMembersModalContainer from './add_members_modal_container'

class CreateChannelModal extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    let modal = this.props.modalType === "createChannel" ? <NewChannelModalContainer /> : <AddMembersModalContainer />
    return(
      {modal}
    )
  }


}

export default CreateChannelModal