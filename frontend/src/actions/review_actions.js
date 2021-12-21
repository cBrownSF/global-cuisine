import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const RECEIVE_USER_REVIEWS = "RECEIVE_USER_REVIEWS";
export const RECEIVE_NEW_REVIEW = "RECEIVE_NEW_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS'
export const REMOVE_REVIEW_ERRORS = 'REMOVE_REVIEW_ERRORS'

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});


export const receiveUserReviews = reviews => ({
  type: RECEIVE_USER_REVIEWS,
  reviews
});

export const receiveNewReview = review => ({
  type: RECEIVE_NEW_REVIEW,
  review
})

export const removeReview = id => ({
    type: REMOVE_REVIEW,
    id
})

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
})

export const removeReviewErrors = () => ({
  type: REMOVE_REVIEW_ERRORS
})

export const getReviews = () => dispatch => {
    return APIUtil.getReviews()
    .then(reviews => dispatch(receiveReviews(reviews)))
}

export const getReview = id => dispatch => {
    return APIUtil.getReview(id)
    .then(review => dispatch(receiveReview(review)))
}

export const getUserReviews = id => dispatch => {
    return APIUtil.getUserReviews(id)
    .then(reviews => dispatch(getUserReviews(reviews)))
}


export const getListingReviews = listingId => dispatch => {
   return APIUtil.getListingReviews(listingId)
   .then(reviews => dispatch(receiveReviews(reviews)))

}


export const writeReview = data => dispatch => {
    return APIUtil.writeReview(data).then(review => {
      dispatch(receiveReview(review))},
      err => (dispatch(receiveReviewErrors(err.response.data)))
      )
}

export const updateReview = review => dispatch => {
    return APIUtil.updateReview(review)
    .then(review => dispatch(receiveReview(review)))
}

export const deleteReview = id => dispatch => {
    return APIUtil.deleteReview(id)
    .then(() => {
      dispatch(removeReview(id))
        // hashHistory.push(`/reviews/${id}`)
      })
}