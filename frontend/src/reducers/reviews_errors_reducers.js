import { RECEIVE_REVIEW_ERRORS, REMOVE_REVIEW_ERRORS, RECEIVE_REVIEW } from "../actions/review_actions";

const _nullErrors = []
const ReviewErrorsReducer = (oldState = _nullErrors, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors
    case RECEIVE_REVIEW:
    case REMOVE_REVIEW_ERRORS:
      return _nullErrors;
    default:
      return oldState;
  }
};

export default ReviewErrorsReducer;
