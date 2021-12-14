import { connect } from 'react-redux'
import ReviewIndex from './review_index'
import { deleteReview, getReviews, getListingReviews } from "../../actions/review_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        reviews: Object.values(state.reviews),
        currentUserId: state.session.user.id,
        listingId: ownProps.listingId
        }
}

const mapDispatchToProps = (dispatch) => ({
  getListingReviews: (listingId) => dispatch(getListingReviews(listingId)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  // getReviews: () => dispatch(getReviews())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex)