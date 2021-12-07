import React from 'react';
import { Link } from 'react-router-dom'
// import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }


  getLinks() {
    console.log(this.props)
    debugger;
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={'/recipes'}>All Recipes</Link>
          <Link to={'/profile'}>Profile</Link>
          <Link to={'/new_recipe'}>Create New Recipe</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Global Cuisine</h1>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;