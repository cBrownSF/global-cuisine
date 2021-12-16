import { connect } from 'react-redux';
import { likeListing, removeLikeErrors } from "../../actions/like_actions";
import LikeForm from './like_form';


const mSTP = (state, ownProps) => {
    return {
    like: {
        liker_id: state.session.user.id,
        listing_id: ownProps.listingId
    },
    formType: 'Like Recipe',
    currentUser: state.session.user,
    listing: ownProps.listing,
    errors: Object.values(state.errors.review)
    }
}

const mDTP = (dispatch) => ({
  submitLike: (like) => dispatch(likeListing(like)),
  removeLikeErrors: () => dispatch(removeLikeErrors())
});
export default connect(mSTP, mDTP)(LikeForm)