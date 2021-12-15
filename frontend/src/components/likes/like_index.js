import React from "react";
import LikeIndexItem from "./like_index_item";

class LikeIndex extends React.Component {

  componentDidMount() {
    this.props.getListingLikes(this.props.listingId)
  }

  render(){
    if (!this.props.likes) return null;
    const { likes, listingId, currentUserId, deleteLike } = this.props;
   
    return (
      <div className="likes-list-class">
        <div className="title-of-all-likes">
          <h1>Likes</h1>
        </div>
        <ul>
          {likes.map((like) => (
            <LikeIndexItem
              like={like}
              currentUserId={currentUserId}
              listingId={listingId}
              deleteLike={deleteLike}
              key={like._id + "y"}
            />
          ))}
        </ul>
        <br />
      </div>
    );
    }
}

export default LikeIndex;