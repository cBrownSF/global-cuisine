import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./nav.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }
  
  demoLogin(e){
    e.preventDefault();
    this.props.loginDemoUser().then(() => this.props.history.push("/"))
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="loggedIn">
          <Link to={"/recipes"} className="all-recipes">All Recipes</Link>
          <Link to={"/profile"} className="profile">Profile</Link>
          <Link to={"/recipes/new"}className="create">Create Recipe</Link>
          <button onClick={this.logoutUser} className="logoutbtn">
           <p className="logout-p">Logout</p>
          </button>
        </div>
      );
    } else {
      return (
        <div className="signUp">
          <div className="signup-div">
            <Link to={"/signup"} className="signupbtn">
              <p className="p-signup">Signup</p>
            </Link>
          </div>
          <div className="login-div">
            <Link to={"/login"} className="loginbtn">
              <p className="p-login">Login</p>
            </Link>
          </div>
          <div onClick={this.demoLogin} className="demoLogin">
            <p>Demo Login</p>
          </div>
          <div className="all-recipes">
          <Link to="/recipes" className="linktorecipes">All Recipes</Link>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="navbar-top">
        <div className="icon-app-name">
          <i className="fas fa-globe-americas" id="global-link"></i>
          <div className="homelink-global"><Link to="/"><p className="text-global">Global Cuisine</p></Link></div>
        </div>
        <div>{this.getLinks()}</div>
      </div>
    );
  }
}

export default withRouter(NavBar);
