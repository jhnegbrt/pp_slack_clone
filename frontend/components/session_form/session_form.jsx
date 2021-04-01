import React from 'react'

class SessionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    let formType = ""
    if (this.props.formType === "signin"){
      formType = "Sign In"
    } else {
      formType = "Sign Up"
    }
    return(
      <div className="sign-form">
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input type="text" value={this.state.username} name="username" onChange={this.handleChange}></input>
          </label>
          <label>Password
            <input type="password" value={this.state.password} name="password"  onChange={this.handleChange}></input>
          </label>
          <input type="submit" value={formType}></input>
        </form>
      </div>

    )

  }

}

export default SessionForm;