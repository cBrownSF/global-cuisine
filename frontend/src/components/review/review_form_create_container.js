import { connect } from 'react-redux';
import { writeReview } from '../../actions/review_actions';
import ReviewForm from './review_form';
import {withRouter} from "react-router-dom"

const mSTP = (state, ownProps) => ({
    review: {
        review: '',
        score: 5,
        user_id: state.session.id,
        listing_id: ownProps.listingId
    },
    formType: 'Create Review',
    currentUser: state.session.id,
    listing: state.entities.events[ownProps.listingId]
})

const mDTP = dispatch => ({
    submitReview: review => dispatch(writeReview(review))
})

export default withRouter(connect(mSTP, mDTP)(ReviewForm))