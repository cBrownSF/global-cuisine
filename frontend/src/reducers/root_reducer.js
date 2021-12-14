import { combineReducers } from 'redux';
import session from './sessions_reducer';
import errors from './errors_reducer';
import listings from './listings_reducer';
import reviews from './reviews_reducer';
import likes from './likes_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  listings,
  reviews,
  likes
});

export default RootReducer;