import { combineReducers } from 'redux';
import session from './sessions_reducer';
import errors from './errors_reducer';
import ListingsReducer from './listings_reducer'

const RootReducer = combineReducers({
  session,
  errors,
  listings: ListingsReducer
});

export default RootReducer;