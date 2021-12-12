import { combineReducers } from 'redux';
import session from './sessions_reducer';
import errors from './errors_reducer';
import listings from './listings_reducer';
import reviews from './reviews_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  listings,
  reviews,
});

export default RootReducer;