import React from 'react'

class SessionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user);
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
        <form>
          <label>Username
            <input type="text" name="username" value={this.state.username}></input>
          </label>
          <label>Password
            <input type="password" name="password" value={this.state.password}></input>
          </label>
          <input type="submit" value={formType}></input>
        </form>
      </div>

    )

  }

}

export default SessionForm;