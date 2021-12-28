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

export const writeListing = listing => {
  return axios.post('/api/listings/', listing)
}

export const updateListing = listing => {
  return axios.patch(`/api/listings/${listing.get('editId')}/update`,listing)
}

export const deleteListing = id => {
    return axios.delete(`/api/listings/${id}/delete`)
}
