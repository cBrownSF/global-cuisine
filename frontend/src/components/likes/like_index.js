import React from "react";
import LikeIndexItem from "./likes_index_item";
import "./like.css";
class LikeIndex extends React.Component {

  componentDidMount() {
    this.props.getLikes();
  }
  render() {
    if (!this.props.likes) return null;
    const { likes, getLikes,listingId, deleteLike, currentUser } = this.props;
    let likeListingArray = [];
    let count = 0;
    likes.forEach((like) => {
      if (like.listing_id === listingId) {
        likeListingArray.push(like)
        count += 1
      }
    });
    return (
      <div className="like-index">
        <div className="likes-list-class">{`likes` + ` ` + count}</div>
        <div>
          {likes.map((like, index) => (
            <LikeIndexItem
              listingId={listingId}
              deleteLike={deleteLike}
              currentUser={currentUser}
              like={like}
              updateLike={getLikes}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default LikeIndex;