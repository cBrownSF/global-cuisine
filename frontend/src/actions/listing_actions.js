import * as APIUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING"
export const RECEIVE_USER_LISTINGS = "RECEIVE_USER_LISTINGS";
export const RECEIVE_NEW_LISTING = "RECEIVE_NEW_LISTING";
export const REMOVE_LISTING = "REMOVE_LISTING";

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

export const removeListing = id => ({
    type: REMOVE_LISTING,
    id
})

export const receiveListing = listing => ({
    type: RECEIVE_LISTING,
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
  debugger;
    return APIUtil.writeListing(data)
    .then(listing => dispatch(receiveNewListing(listing)))
}

export const updateListing = listing => dispatch => {
    return APIUtil.updateListing(listing)
    .then(listing => dispatch(receiveListing(listing)))
}

export const deleteListing = id => dispatch => {
    return APIUtil.deleteListing(id)
    .then(() => dispatch(removeListing(id)))
}