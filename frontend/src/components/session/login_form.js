import React from 'react';
import { withRouter } from 'react-router-dom';

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <br />
            <input type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
              placeholder="Email"
            />
            <br />
            <input type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              placeholder="Password"
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

export default withRouter(LoginForm);