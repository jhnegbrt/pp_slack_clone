import React from 'react'
import {Link} from 'react-router-dom'

class AddChannelButton extends React.Component{
  constructor(props){
    super(props)
    this.state={
      channelButtons: false
    }


    this.wrapperRef = React.createRef();
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.toggleChannelButtons = this.toggleChannelButtons.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)

  }

  toggleChannelButtons(){

    this.setState({
      channelButtons: !this.state.channelButtons
    })

  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState({
        channelButtons: false
      })
    }
  }

  

  render(){
    
    const channelButtons = (
      <div className={"channel-buttons"}>
        {/* <div className={"triangle"}></div> */}
        <a onClick={()=>this.props.toggleModal("createChannel")}>Create Channel</a>
        <Link to="/client/explore">Browse Channels</Link>
      </div>
    )
    return(

      <div ref={this.wrapperRef}>
        {this.state.channelButtons ? channelButtons : null} 
        <b onClick={this.toggleChannelButtons.bind(this)}>Add Channel</b>
      </div>

    )
  }
}

export default AddChannelButton