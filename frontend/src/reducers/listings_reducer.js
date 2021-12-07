import { RECEIVE_LISTINGS, RECEIVE_LISTING, RECEIVE_NEW_LISTING, RECEIVE_USER_LISTINGS, REMOVE_LISTING } from '../actions/listing_actions';

const ListingsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_LISTINGS:
        newState.all = action.listings.data;
        return newState;
      case RECEIVE_USER_LISTINGS:
        newState.user = action.listings.data;
        return newState;
      case RECEIVE_NEW_LISTING:
        newState.new = action.listing.data
        return newState;
        case RECEIVE_LISTING:
        newState[action.listing.id] = action.listing;
        return newState
        case REMOVE_LISTING:
        delete newState[action.id];
        return newState
      default:
        return state;
    }
  };
  
  export default ListingsReducer;