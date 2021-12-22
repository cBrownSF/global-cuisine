import { connect } from 'react-redux'
import ReviewIndex from './review_index'
import { deleteReview, getListingReviews } from "../../actions/review_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        reviews: Object.values(state.reviews),
        currentUser: state.session.user,
        listingId: ownProps.listingId
        }
}

const mapDispatchToProps = (dispatch) => ({
  getListingReviews: (listingId) => dispatch(getListingReviews(listingId)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex)