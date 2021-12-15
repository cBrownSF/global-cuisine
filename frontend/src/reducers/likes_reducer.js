import {
    RECEIVE_LIKES,
    RECEIVE_LIKE,
    RECEIVE_USER_LIKES,
    REMOVE_LIKE,
  } from "../actions/like_actions";

  const LikesReducer = (state = { user: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
      case RECEIVE_LIKES:
        return action.likes.data;
      case RECEIVE_USER_LIKES:
        newState.user = action.likes.data;
        return newState;
      case RECEIVE_LIKE:
        newState[action.like.data._id] = action.like.data;
        return newState;
      case REMOVE_LIKE:
        delete newState[action.id];
        return newState;
      default:
        return state;
    }
  };
  export default LikesReducer;


  
  

