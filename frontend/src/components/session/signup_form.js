import React from 'react';
import { withRouter } from 'react-router-dom';
import './sign_up_form.css'
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: ''
    };
  
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 
   componentDidMount() {
     this.props.clearErrors()
   }
 
  handleInput(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
    .then( res =>{
      if (res.type !== 'RECEIVE_SESSION_ERRORS'){
        this.props.login(this.state)
      }
      }
    )
  }

  renderErrors() {
    return (
      <ul className="error-list">
        {Object.values(this.props.errors).map((error, i) => (
          <li className= "errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
   )
  }

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.handleSubmit}>
          <div className="session-form">
            <br />
            <input id="form-boxes"
            type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
              placeholder="Email"
            />
            <br />
            <input id="form-boxes"
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              placeholder="Username"
            />
            <br />
            <input id="form-boxes"
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              placeholder="Password"
            />
            <br />
            <input id="form-boxes"
              type="password"
              value={this.state.password2}
              onChange={this.handleInput('password2')}
              placeholder="Confirm Password"
            />
            <br />
            <input className='submit-button' type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);