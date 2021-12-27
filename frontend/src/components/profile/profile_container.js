import { connect } from "react-redux";
import Profile from "./profile";
import { getUserListings, getListings } from "../../actions/listing_actions";
import { getLikes } from "../../actions/like_actions";


const mapStateToProps = (state) => {
  return {
    listings: Object.values(state.listings),
    currentUser: state.session.user,
    likes: Object.values(state.likes)
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUserListings : (id) => dispatch(getUserListings(id)),
  getLikes: () => dispatch(getLikes()),
  getListings: () => dispatch(getListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
