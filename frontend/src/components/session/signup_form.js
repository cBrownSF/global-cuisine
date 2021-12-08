import React from 'react';
import { withRouter } from 'react-router-dom';

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
      <ul>
        {Object.values(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
   )
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <br />
            <input type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
              placeholder="Email"
            />
            <br />
            <input type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              placeholder="Username"
            />
            <br />
            <input type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              placeholder="Password"
            />
            <br />
            <input type="password"
              value={this.state.password2}
              onChange={this.handleInput('password2')}
              placeholder="Confirm Password"
            />
            <br />
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);