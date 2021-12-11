import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Switch, Route, Redirect } from "react-router-dom";
import CreateFormContainer from './recipe_forms/create_form_container'
import EditFormContainer from './recipe_forms/edit_form_container'
import RecipeShowContainer from './recipe/recipe_show_container'
import RecipeIndexContainer from './recipe/recipe_index_container'
import NavBarContainer from './nav/navbar_container'
import HomePage from './home/home_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_container.js';
import CreateReviewFormContainer from './review/review_form_create_container';
import ReviewIndexContainer from './review/review_index_container';
const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/recipes/new" component={CreateFormContainer} />
      <Route
        exact
        path="/recipes/:listingId/edit"
        component={EditFormContainer}
      />
      <Route
        exact
        path="/recipes/:listingId"
        component={RecipeShowContainer}
      />
      <Route exact path="/recipes" component={RecipeIndexContainer} />
      <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      <Route exact path="/reviews/new" component={CreateReviewFormContainer} />
      <Route exact path="/recipes/:recipeId/reviews" component={ReviewIndexContainer}/>
      {/* <Route exact path ='/reviews' component= {ReviewIndexContainer}/> */}
    </Switch>
  </div>
);
export default App;