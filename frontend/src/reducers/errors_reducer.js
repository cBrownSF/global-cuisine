import { combineReducers } from 'redux';
import ListingErrorsReducer from './listings_errors_reducer';
import SessionErrorsReducer from './sessions_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  listing: ListingErrorsReducer
});