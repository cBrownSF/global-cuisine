import { connect } from "react-redux";
import {
  writeListing,
  removeListingErrors,
} from "../../actions/listing_actions";
import RecipeForm from "./recipe_form";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.listing,
    currentUser: state.session.user,
    formType: "Create",
    listing: "",
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    submitForm: (listing) => dispatch(writeListing(listing)),
    clearErrors: () => dispatch(removeListingErrors()),
  };
};
export default
  connect(mapStateToProps, mapDispatchtoProps)(RecipeForm)
;
