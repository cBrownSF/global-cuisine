import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

const sessionReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case RECEIVE_USER_LOGOUT:
      debugger;
      return {
        isAuthenticated: false,
        user: undefined
      };
    default:
      return state;
  }
}

export default sessionReducer;