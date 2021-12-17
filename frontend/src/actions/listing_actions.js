import * as APIUtil from '../util/listing_api_util';
import {hashHistory} from "react-router"
export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING"
export const RECEIVE_USER_LISTINGS = "RECEIVE_USER_LISTINGS";
export const RECEIVE_NEW_LISTING = "RECEIVE_NEW_LISTING";
export const REMOVE_LISTING = "REMOVE_LISTING";
export const RECEIVE_LISTING_ERRORS = 'RECEIVE_LISTING_ERRORS'
export const REMOVE_LISTING_ERRORS = 'REMOVE_LISTING_ERRORS'

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

export const receiveListingErrors = errors => ({
  type: RECEIVE_LISTING_ERRORS,
  errors
})

export const removeListingErrors = () => ({
  type: REMOVE_LISTING_ERRORS
})

export const getListings = () => dispatch => {
    return APIUtil.getListings()
    .then(listings => dispatch(receiveListings(listings)))
}

export const getListing = id => dispatch => {
    return APIUtil.getListing(id)
    .then(listing => dispatch(receiveListing(listing)))
}

export const getUserListings = id => dispatch => {
    return APIUtil.getUserListings(id)
    .then(listings => dispatch(receiveListings(listings)))
}

export const writeListing = data => dispatch => {
    return APIUtil.writeListing(data).then(createdListing => {
      dispatch(receiveListing(createdListing))
      hashHistory.push(`/recipes/${createdListing.data._id}`)
    })
      .catch(err => (dispatch(receiveListingErrors(err.response.data)))
      )
}

export const updateListing = listing => dispatch => {
  return APIUtil.updateListing(listing).then(listing => {
    dispatch(receiveListing(listing))
    hashHistory.push(`/recipes/${listing.data._id}`)
  })
    .catch(err => (dispatch(receiveListingErrors(err.response.data)))
    )
}
export const deleteListing = id => dispatch => {
    return APIUtil.deleteListing(id)
    .then(() => {
    dispatch(removeListing(id))
      hashHistory.push(`/profile`)
    })
}



