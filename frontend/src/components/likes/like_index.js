import React from "react";
class LikeIndex extends React.Component {
  componentDidMount() {
    this.props.getLikes();
  }
  render() {
    if (!this.props.likes) return null;
    const { likes, listingId, deleteLike, currentUserId } = this.props;
    let likeCount = 0;
    likes.forEach((like) => {
       if (like.listing_id === listingId) {
         likeCount += 1;
       }
   })
   
    return (
      <div className="likes-list-class">
        <div className="title-of-all-likes">
          {likeCount}
        </div>
      </div>
    );
  }
}
export default LikeIndex;
