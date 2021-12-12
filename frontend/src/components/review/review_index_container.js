import { connect } from 'react-redux'
import ReviewIndex from './review_index'
import { getReviews } from '../../actions/review_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        reviews: Object.values(state.reviews),
        user_id: state.session.user.id,
        listing_id: ownProps.listingId,
        listing: ownProps.listing
        }
}

const mapDispatchToProps = dispatch => ({
  receiveReviews: () => dispatch(getReviews())
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex)