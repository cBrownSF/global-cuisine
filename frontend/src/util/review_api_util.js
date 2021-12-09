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

export const getListingReviews = id => {
    return axios.get(`/api/reviews/review/${id}`)
  };

export const writeReview = review => {
  return axios.post('/api/reviews/', review)
}

export const updateReview = review => {
  
  return axios.patch(`/api/reviews/ ${review.editId}/update`, review)
}

export const deleteReview = id => {
    return axios.delete(`/api/reviews/${id}`)
}