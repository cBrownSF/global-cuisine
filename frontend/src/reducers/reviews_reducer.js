import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  RECEIVE_USER_REVIEWS,
  REMOVE_REVIEW,
} from "../actions/review_actions";
const ReviewsReducer = (state = { user: {} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews.data;
    case RECEIVE_USER_REVIEWS:
      newState.user = action.reviews.data;
      return newState;
    case RECEIVE_REVIEW:
      newState[action.review.data._id] = action.review.data;
      return newState;
    case REMOVE_REVIEW:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};
export default ReviewsReducer;
