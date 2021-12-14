import { connect } from "react-redux";
import Profile from "./profile";
import { getUserListings } from "../../actions/listing_actions";


const mapStateToProps = (state) => {
  return {
    listings: Object.values(state.listings),
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUserListings : (id) => dispatch(getUserListings(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
