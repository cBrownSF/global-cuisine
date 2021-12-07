import axios from 'axios';

export const getListings = () => {
  return axios.get('/api/listings')
};

export const getListing = id => {
    return axios.get(`/api/listings/${id}`)
}

export const getUserListings = id => {
  return axios.get(`/api/listings/user/${id}`)
};

export const writeListing = data => {
  return axios.post('/api/listings/', data)
}

export const updateListing = listing => {
    return axios.patch(`/api/listings/${listing.id}`)
}

export const deleteListing = id => {
    return axios.delete(`/api/listings/${id}`)
}