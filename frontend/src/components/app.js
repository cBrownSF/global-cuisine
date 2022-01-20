import React from 'react';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route, Redirect } from "react-router-dom";
import CreateFormContainer from './recipe_forms/create_form_container'
import EditFormContainer from './recipe_forms/edit_form_container'
import RecipeShowContainer from './recipe/recipe_show_container'
import RecipeIndexContainer from './recipe/recipe_index_container'
import NavBarContainer from './nav/navbar_container'
import HomePage from './home/home_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_container';
import ProfileContainer from './profile/profile_container';
import ReviewIndexContainer from './review/review_index_container';
import AboutUs from './about_us.js/about_us';
const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/recipes/new" component={CreateFormContainer} />
      <ProtectedRoute
        exact
        path="/recipes/:listingId/edit"
        component={EditFormContainer}
      />
      <Route exact path="/recipes/:listingId" component={RecipeShowContainer} />
      <Route exact path="/recipes" component={RecipeIndexContainer} />
      <Route
        exact
        path="/recipes/:recipeId/reviews"
        component={ReviewIndexContainer}
      />
      <Route exact path="/about" component={AboutUs} />
      {/* <AuthRoute exact path="/" component={HomePage} /> */}
      <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      {/* <Redirect to="/" /> */}
    </Switch>
  </div>
);
export default App;