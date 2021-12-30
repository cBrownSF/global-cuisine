import { getListing, deleteListing,removeListingErrors } from "../../actions/listing_actions";
import { getListingLikes } from "../../actions/like_actions";
import { connect } from "react-redux";
import RecipeShow from './recipe_show';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    listing: state.listings[ownProps.match.params.listingId],
    reviews: Object.values(state.reviews),
    likes: Object.values(state.likes)
  }
}

const mapDispatchToProps = (dispatch) => ({
  receiveListing: (id) => dispatch(getListing(id)),
  deleteListing: (id) => dispatch(deleteListing(id)),
  getListingLikes: (listingId) => dispatch(getListingLikes(listingId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow)