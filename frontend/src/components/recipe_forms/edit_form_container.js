import { connect } from 'react-redux';
import { updateListing, deleteListing, getListing,removeListingErrors } from "../../actions/listing_actions";
import EditRecipeForm from './edit_recipe_form';
import { withRouter } from 'react-router';
const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.listing,
    currentUser: state.session.user,
    formType: 'update',
    listing: state.listings[ownProps.match.params.listingId]
  }
}
const mapDispatchtoProps = (dispatch) => {
  return {
    submitForm: id => dispatch(updateListing(id)),
    deleteListing: id => dispatch(deleteListing(id)),
    receiveListing: id => dispatch(getListing(id)),
    clearErrors: () => dispatch(removeListingErrors())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(EditRecipeForm));
