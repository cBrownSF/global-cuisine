import { combineReducers } from 'redux';
import ListingErrorsReducer from './listings_errors_reducer';
import SessionErrorsReducer from './sessions_errors_reducer';
import ReviewErrorsReducer from './reviews_errors_reducers'

export default combineReducers({
  session: SessionErrorsReducer,
  listing: ListingErrorsReducer,
  review: ReviewErrorsReducer
});