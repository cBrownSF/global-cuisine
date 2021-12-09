import React from 'react';
import { AuthRoute} from '../util/route_util';
import { Switch,Route } from 'react-router-dom';
import CreateFormContainer from './recipe_forms/create_form_container'
import EditFormContainer from './recipe_forms/edit_form_container' 
import RecipeShowContainer from './recipe/recipe_show_container'
import RecipeIndexContainer from './recipe/recipe_index_container'
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
      <Route exact path = "/recipes/new" component ={CreateFormContainer} />
      <Route exact path = "/recipes/:listingId/edit" component={EditFormContainer} />
      <Route exact path="/recipes/:listingId" component={RecipeShowContainer} />
      <Route exact path="/recipes/" component={RecipeIndexContainer} />
    </Switch>
  </div>
);

export default App;