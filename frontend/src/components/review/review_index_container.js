import { connect } from 'react-redux'
import ReviewIndex from './review_index'
import { getReviews } from '../../actions/review_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        reviews: Object.values(state.entities.reviews),
        user_id: state.session.id,
        listing_id: ownProps.listingId
        }
}

const mapDispatchToProps = dispatch => ({
  receiveReviews: () => dispatch(getReviews())
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex)