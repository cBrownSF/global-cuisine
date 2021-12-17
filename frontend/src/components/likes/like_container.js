import { connect } from 'react-redux';
import { likeListing, removeLikeErrors, getLikes } from "../../actions/like_actions";
import LikeForm from './like_form';


const mSTP = (state, ownProps) => {
    return {
    like: {
        liker_id: state.session.user.id,
        listing_id: ownProps.listingId,
    },
    formType: 'Like Recipe',
    currentUser: state.session.user,
    listing: ownProps.listing,
    errors: Object.values(state.errors.review),
    likes: Object.values(state.likes),
    listings: Object.values(state.listings)
    }
}

const mDTP = (dispatch) => ({
  submitLike: (like) => dispatch(likeListing(like)),
  removeLikeErrors: () => dispatch(removeLikeErrors()),
  getLikes: () => dispatch(getLikes())
});
export default connect(mSTP, mDTP)(LikeForm)