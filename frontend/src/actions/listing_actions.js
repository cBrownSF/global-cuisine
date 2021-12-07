import * as APIUtil from '../util/session_api_util';

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING"
export const RECEIVE_USER_LISTINGS = "RECEIVE_USER_LISTINGS";
export const RECEIVE_NEW_LISTING = "RECEIVE_NEW_LISTING";

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
});


export const receiveUserListings = listings => ({
  type: RECEIVE_USER_LISTINGS,
  listings
});

export const receiveNewListing = listing => ({
  type: RECEIVE_NEW_LISTING,
  listing
})

export const getListings = () => dispatch => {
    return APIUtil.getListings()
    .then(listings => dispatch(receiveListings(listings)))
}

export const getListing = id => dispatch => {
    return APIUtil.getListing(id)
    .then(listing => dispatch(receiveNewListing(listing)))
}

export const getUserListings = id => dispatch => {
    return APIUtil.getUserListings(id)
    .then(listings => dispatch(getUserListings(listings)))
}

export const writeListing = data => dispatch => {
    return APIUtil.writeListing(data)
    .then(listing => dispatch(receiveNewListing(listing)))
}