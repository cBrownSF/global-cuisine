import React from 'react';
import { AuthRoute} from '../util/route_util';
import { Switch,Route } from 'react-router-dom';
import CreateFormContainer from './recipe_forms/create_form_container'
import EditFormContainer from './recipe_forms/edit_form_container' 

import NavBarContainer from './nav/navbar_container'

import HomePage from './home/home_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_container.js';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={HomePage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path = "/listings/new" component ={CreateFormContainer} />
      <Route exact path = "/listings/:listingId/edit" component={EditFormContainer} />
    </Switch>
  </div>
);

export default App;