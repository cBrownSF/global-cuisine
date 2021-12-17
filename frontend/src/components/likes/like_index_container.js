import { connect } from "react-redux";
import LikeIndex from "./like_index";
import { deleteLike, getLikes } from "../../actions/like_actions";
const mapStateToProps = (state, ownProps) => {
  return {
    likes: Object.values(state.likes),
    listingId: ownProps.listingId,
    currentUser: state.session.user
  };
};
const mapDispatchToProps = (dispatch) => ({
  getLikes: () => dispatch(getLikes()),
  deleteLike: (likeId) => dispatch(deleteLike(likeId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LikeIndex);
