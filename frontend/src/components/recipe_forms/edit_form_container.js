import { connect } from 'react-redux';
import { updateListing, deleteListing} from "../../actions/listing_actions";
import ListingForm from './recipe_form';
import { withRouter } from 'react-router';
const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    formType: 'update'
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    submitForm: id => dispatch(updateListing(id)),
    deleteListing: id => dispatch(deleteListing(id)),
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(ListingForm))