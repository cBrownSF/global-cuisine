import { RECEIVE_LIKE_ERRORS, REMOVE_LIKE_ERRORS, RECEIVE_LIKE } from "../actions/like_actions";

const _nullErrors = []
const LikeErrorsReducer = (oldState = _nullErrors, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_LIKE_ERRORS:
      return action.errors
    case RECEIVE_LIKE:
    case REMOVE_LIKE_ERRORS:
      return _nullErrors;
    default:
      return oldState;
  }
};

export default LikeErrorsReducer;
