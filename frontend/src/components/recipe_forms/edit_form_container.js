import { connect } from 'react-redux';
import { updateListing, deleteListing,getListing} from "../../actions/listing_actions";
import EditForm from './edit_recipe_form';
import { withRouter } from 'react-router';
const mapStateToProps = (state,ownProps) => {
  return {
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
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(EditForm))