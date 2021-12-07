import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentDidUpdate(prevProps){
    console.log(prevProps)
    console.log(this.props)
    if (prevProps.signedIn !== this.props.signedIn) {
      debugger;
      this.props.history.push('/login');
    }
  }
  // componentWillReceiveProps(nextProps) {
  //   if (prevProps.signedIn !== this.props.signedIn) {
  //     debugger;
  //     this.props.history.push('/login');
  //   }

  //   this.setState({ errors: nextProps.errors })
  // }


  handleInput(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
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