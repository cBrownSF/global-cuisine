import axios from 'axios';

export const getReviews = () => {
  return axios.get('/api/reviews')
};

export const getReview = id => {
    return axios.get(`/api/reviews/${id}`)
}

export const getUserReviews = id => {
  return axios.get(`/api/reviews/user/${id}`)
};

export const getListingReviews = listingId => {
    return axios.get(`/api/reviews/listing/${listingId}`)
  };

export const writeReview = review => {
  return axios.post(`/api/reviews/${review.listingId}`, review)
}

export const updateReview = review => {
  
  return axios.patch(`/api/reviews/ ${review.id}`, review)
}

export const deleteReview = id => {
    return axios.delete(`/api/reviews/${id}`)
}