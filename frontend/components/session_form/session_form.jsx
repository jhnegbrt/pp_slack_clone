import React from 'react'
import {Link} from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.enterSleuthMode = this.enterSleuthMode.bind(this)
  }

  passwordsMatch(){
    return this.state.password === this.state.passwordConfirmation
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.props.formType === "signup" && this.passwordsMatch() === false){
      this.setState({
        errors: ["Passwords must match!"]
      })
    } else {
      const user = Object.assign({}, {password: this.state.password, username: this.state.username})
      this.props.processForm(user);
    }
  }

  enterSleuthMode(e){
    e.preventDefault()
    this.props.processForm({username: "The Sleuth", password: "123456"})
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  renderErrors(){
    return(
      <ul className="session-errors">
        {this.props.errors.map((error, i) =>(
          <li key={`error-props-${i}`}>
            {error}
          </li>
        ))}
        {this.state.errors.map((error, i)=>(
          <li key={`error-state-${i}`}>
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
        <p>Already have an account? <Link to='/login'>Sign-In</Link></p>
      )
    } else {
      return(
        <p>New to Sleuth? <Link to='/signup'>Sign-Up</Link></p>
      )
    }
  }

  render(){
    let {formType} = this.props
    let sleuthDemo = (
        <div className="sleuth-form">
            <button onClick={this.enterSleuthMode}>Enter as Sleuth!</button>
            <h3>Enter With Sleuth Mode to chat Anonymously.</h3>
        </div>
    )

    let passwordConfirmation = (
      <label>
        <input type="password" placeholder="CONFIRM PASSWORD" value={this.state.passwordConfirmation} name="passwordConfirmation" onChange={this.handleChange}></input>
      </label>
    )

    return(
      <div className="sign-form-container">
      <div className="sign-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" placeholder="USERNAME" value={this.state.username} name="username" onChange={this.handleChange}></input>
          </label>
          <label>
            <input type="password" placeholder="PASSWORD" value={this.state.password} name="password"  onChange={this.handleChange}></input>
          </label>
          {formType === "signup" ? passwordConfirmation : ""}
          <input type="submit" value={formType === "signin" ? "Sign In" : "Sign Up"}></input>
        </form>
        {this.renderSwitchButton()}
        {this.renderErrors()}
      </div>
        {formType === "signin" ? sleuthDemo : ""}
      </div>

    )

  }

}

export default SessionForm;