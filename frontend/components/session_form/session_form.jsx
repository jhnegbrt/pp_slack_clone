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

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, i) =>(
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render(){
    let formType = ""
    if (this.props.formType === "signin"){
      formType = "Sign In"
    } else {
      formType = "Sign Up"
    }
    return(
      <div>
        <form className="sign-form"onSubmit={this.handleSubmit}>
          <label>
            <input type="text" placeholder="USERNAME" value={this.state.username} name="username" onChange={this.handleChange}></input>
          </label>
          <label>
            <input type="password" placeholder="PASSWORD" value={this.state.password} name="password"  onChange={this.handleChange}></input>
          </label>
          <input type="submit" value={formType}></input>
        </form>
        {this.renderErrors()}
      </div>


 
    )

  }

}

export default SessionForm;