import React from 'react'
import {Link} from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.enterSleuthMode = this.enterSleuthMode.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user);
  }

  enterSleuthMode(e){
    e.preventDefault()
    this.props.processForm({username: "sleuthaccount", password: "123456"})
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

  componentDidMount(){
    this.props.clearErrors();
  }

  renderSwitchButton(){
    if (this.props.formType === "signup"){
      return(
        <p>Already have an account? Sign-In<Link to='/login'> here</Link></p>
      )
    } else {
      return(
        <p>New to Sleuth? Sign-Up<Link to='/signup'> here</Link></p>
      )
    }
  }

  render(){
    let formType;
    let sleuthDemo;

    if (this.props.formType === "signin"){
      formType = "Sign In"
    } else {
      formType = "Sign Up"
    }


    if (this.props.formType === "signin"){
      sleuthDemo = (
        <div className="sleuth-form">
          <div>Enter With Sleuth Mode!
            <h1>Use Sleuth Mode to chat anonymously or demo this application</h1>
            <button onClick={this.enterSleuthMode}>Enter as Sleuth!</button>
          </div>

        </div>

      )
    }

    return(
      <div className = "sign-form-container">
      <div className="sign-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" placeholder="USERNAME" value={this.state.username} name="username" onChange={this.handleChange}></input>
          </label>
          <label>
            <input type="password" placeholder="PASSWORD" value={this.state.password} name="password"  onChange={this.handleChange}></input>
          </label>
          <input type="submit" value={formType}></input>
        </form>
        {this.renderSwitchButton()}
        {this.renderErrors()}
      </div>

        {sleuthDemo}
 
      </div>

    )

  }

}

export default SessionForm;