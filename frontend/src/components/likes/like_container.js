import { connect } from 'react-redux';
import { likeListing, removeLikeErrors } from "../../actions/like_actions";
import LikeForm from './like_form';
// import {withRouter} from "react-router-dom";

const mSTP = (state, ownProps) => {
    debugger
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

const mDTP = dispatch => ({
    submitLike: like => dispatch(likeListing(like)),
    removeLikeErrors: () => dispatch(removeLikeErrors())
})
export default connect(mSTP, mDTP)(LikeForm)