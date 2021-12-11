import { connect } from 'react-redux';
import { writeReview } from '../../actions/review_actions';
import ReviewForm from './review_form';
const mSTP = (state, ownProps) =>{
 return{ 
   review: {
    review: '',
    score: 5,
    reviewer_name: state.session.user.username,
    listing_id: state.listings[ownProps.listingId]
  },
  formType: 'Create Review',
  currentUser: state.session.user,
  listing: state.listings[ownProps.listingId]
}
}
const mDTP = dispatch => ({
  submitReview: review => dispatch(writeReview(review))
})
export default connect(mSTP, mDTP)(ReviewForm)