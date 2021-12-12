import { connect } from "react-redux";
import { getListings } from "../../actions/listing_actions";
import Search from "./search";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getListings: () => dispatch(getListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
