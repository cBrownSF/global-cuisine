import { connect } from 'react-redux';
import { writeListing, removeListingErrors, uploadPicture } from "../../actions/listing_actions";
import ListingForm from './recipe_form';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    formType: 'create',
    listing:''
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    submitForm: (listing) => dispatch(writeListing(listing)),
    clearErrors: () => dispatch(removeListingErrors())
    // uploadPicture: (listingId, file) => dispatch(uploadPicture(listingId, file))
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(ListingForm))