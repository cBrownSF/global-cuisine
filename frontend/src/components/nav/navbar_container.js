import { connect } from 'react-redux';
import { logout,login } from '../../actions/session_actions';
import { withRouter } from 'react-router';
import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});
const dispatchStatetoProps = dispatch => ({
  logout: () => dispatch(logout()),
  loginDemoUser: () => dispatch(login({
    email: 'demoUser3@gmail.com',
    username: 'testUser',
    password: '123456',
    password2: '123456'
  }))
})
export default withRouter(connect(
  mapStateToProps,
  dispatchStatetoProps
)(NavBar));