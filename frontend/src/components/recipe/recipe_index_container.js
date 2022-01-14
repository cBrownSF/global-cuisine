import { connect } from 'react-redux'
import RecipeIndex from './recipes_index'
import { getListings } from '../../actions/listing_actions'

const mapStateToProps = state => {
  return {
    listings: Object.values(state.listings),
  }
}

const mapDispatchToProps = dispatch => ({
  receiveListings: () => dispatch(getListings())
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeIndex)
