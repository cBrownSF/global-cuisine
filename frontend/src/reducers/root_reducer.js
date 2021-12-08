import { combineReducers } from 'redux';
import session from './sessions_reducer';
import errors from './errors_reducer';
import listings from './listings_reducer'

const RootReducer = combineReducers({
  session,
  errors,
  listings
});

export default RootReducer;