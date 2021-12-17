import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE"
export const RECEIVE_USER_LIKES = "RECEIVE_USER_LIKES";
export const RECEIVE_NEW_LIKE = "RECEIVE_NEW_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS'
export const REMOVE_LIKE_ERRORS = 'REMOVE_LIKE_ERRORS'

export const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  likes
});


export const receiveUserLikes = likes => ({
  type: RECEIVE_USER_LIKES,
  likes
});

export const receiveNewLike = like => ({
  type: RECEIVE_NEW_LIKE,
  like
})

export const removeLike = id => ({
    type: REMOVE_LIKE,
    id
})

export const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
})

export const receiveLikeErrors = errors => ({
  type: RECEIVE_LIKE_ERRORS,
  errors
})

export const removeLikeErrors = () => ({
  type: REMOVE_LIKE_ERRORS
})

export const getLikes = () => dispatch => {
    return APIUtil.getLikes()
    .then(likes => dispatch(receiveLikes(likes)))
}

export const getLike = id => dispatch => {
    return APIUtil.getLike(id)
    .then(like => dispatch(receiveLike(like)))
}

export const getUserLikes = id => dispatch => {
    return APIUtil.getUserLikes(id)
    .then(likes => dispatch(getUserLikes(likes)))
}


export const getListingLikes = listingId => dispatch => {
   return APIUtil.getListingLikes(listingId)
   .then(likes => dispatch(receiveLikes(likes)))

}

export const likeListing = listingId => dispatch => {
    return APIUtil.likeListing(listingId)
    .then(like => {dispatch(receiveLike(like))})
      // .catch((err) => (dispatch(receiveLikeErrors(err.response.data)))
      // )
}

export const deleteLike = id => dispatch => {
    return APIUtil.deleteLike(id)
    .then(() => dispatch(removeLike(id)))
}