import axios from 'axios';

export const getLikes = () => {
  return axios.get('/api/likes')
};

export const getLike = id => {
    return axios.get(`/api/likes/${id}`)
}

export const getUserLikes = id => {
  return axios.get(`/api/likes/user/${id}`)
};

export const getListingLikes = listingId => {
    return axios.get(`/api/likes/listing/${listingId}`)
  };

export const likeListing = listingId => {
  return axios.post(`/api/likes/listing/${listingId}`)
}


export const deleteLike = id => {
    return axios.delete(`/api/likes/${id}`)
}