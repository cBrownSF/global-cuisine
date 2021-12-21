import { getListing, deleteListing } from "../../actions/listing_actions";
import { connect } from "react-redux";
import RecipeShow from './recipe_show';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.user,
    listing: state.listings[ownProps.match.params.listingId]
  }
}

const mapDispatchToProps = dispatch => ({
  receiveListing: id => dispatch(getListing(id)),
  deleteListing: (id) => dispatch(deleteListing(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow)