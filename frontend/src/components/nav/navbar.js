import React from "react";
import { Link } from "react-router-dom";
// import "./nav.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="loggedIn">
          <Link to={"/listings/"}>All Recipes</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/listings/new"}>Create New Recipe</Link>
          <button onClick={this.logoutUser} className="logoutbtn">
            Logout
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
        </div>
      );
    }
  }

  render() {
    return (
      <div className="navbar-top">
        <div>
          <i className="fas fa-globe-americas" id="global-link"></i>
          <p className="homelink-global">Global Cuisine</p>
        </div>
        <div>{this.getLinks()}</div>
      </div>
    );
  }
}

export default NavBar;
