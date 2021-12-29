import React from 'react';
import { withRouter } from 'react-router-dom';
import './login_form.css'
class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }
  
  componentDidMount() {
    this.props.clearErrors()
  }

  componentDidUpdate(){
    if (this.props.currentUser !== undefined){
      this.props.history.push('/');
    }
  }
 
  handleInput(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);

  }

  renderErrors() {
    return (
      <ul className = "error-list">
        {Object.values(this.props.errors).map((error, i) => (
          <li className="errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className='login-container'>
        <form onSubmit={this.handleSubmit}>
          <div className='session-form'>
            <br />
            <input id="form-boxes"
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
              placeholder="Email"
            />
            <br />
            <input id="form-boxes"
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              placeholder="Password"
            />
            <br />
            <input className = 'submit-button' type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);