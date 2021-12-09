import { connect } from 'react-redux'
import ReviewIndex from './reviews_index'
import { getReviews } from '../../actions/review_actions'

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => ({
  receiveReviews: () => dispatch(getReviews())
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex)