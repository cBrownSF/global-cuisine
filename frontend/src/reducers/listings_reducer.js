import { RECEIVE_LISTINGS, RECEIVE_LISTING, RECEIVE_USER_LISTINGS, REMOVE_LISTING } from '../actions/listing_actions';

const ListingsReducer = (state = { user: {}}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_LISTINGS:
       return action.listings.data
      case RECEIVE_USER_LISTINGS:
        newState.user = action.listings.data;
        return newState;
      case RECEIVE_LISTING:
        newState[action.listing.data._id] = action.listing.data;
        return newState
      case REMOVE_LISTING:
        delete newState[action.listingId];
        return newState
      default:
        return state;
    }  
  };
  
//const listingsReducer = (oldState = {},action) =>{

  export default ListingsReducer;