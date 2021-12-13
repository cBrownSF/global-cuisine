import { connect } from "react-redux";
import { getListings } from "../../actions/listing_actions";
import Search from "./search";
import { withRouter } from "react-router";
const mapStateToProps = (state) => {
  return {
    listings: Object.values(state.listings),
  };
};
const mapDispatchToProps = (dispatch) => ({
  getListings: () => dispatch(getListings()),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
