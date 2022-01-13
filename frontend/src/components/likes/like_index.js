import React from "react";
import LikeIndexItem from "./like_index_item"
class LikeIndex extends React.Component {

  componentDidMount() {
    this.props.getLikes();
  }
  render() {
    if (!this.props.likes) return null;
    const { likes, listingId, deleteLike, currentUser } = this.props;
    let likeListingArray = [];
    let count = 0;
    likes.forEach((like) => {
      if (like.listing_id === listingId) {
        likeListingArray.push(like)
        count +=1
      }
    });
    return <div className="likes-list-class">{`likes` + ` ` + count}
    <ul>
    {likes.map((like) => (
                <LikeIndexItem
                  like={like}
                  currentUser={currentUser}
                  listingId={listingId}
                  deleteLike={deleteLike}
                  key={like._id + "z"}
                />
              ))}
    </ul>
    </div>;
    
    }
}
export default LikeIndex;
