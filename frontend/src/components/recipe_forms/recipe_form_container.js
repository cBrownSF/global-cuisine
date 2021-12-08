import { connect } from 'react-redux';
import { writeListing , removeListingErrors } from "../../actions/listing_actions";
import ListingForm from './listing_form';
import { withRouter } from 'react-router';
const mapStateToProps = (state) => {
  return {
    errors: state.errors.listing,
    currentUser: state.sessions.user,
    formType: 'create'
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    submitForm: (listing) => dispatch(writeListing(listing)),
    // clearErrors: () => dispatch(removeListingErrors())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(ListingForm))