import { connect } from 'react-redux'
import LikeIndex from './like_index'
import { deleteLike, getListingLikes } from "../../actions/like_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        likes: Object.values(state.likes),
        currentUserId: state.session.user.id,
        listingId: ownProps.listingId
        }
}

const mapDispatchToProps = (dispatch) => ({
  getListingLikes: (listingId) => dispatch(getListingLikes(listingId)),
  deleteLike: (likeId) => dispatch(deleteLike(likeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeIndex)