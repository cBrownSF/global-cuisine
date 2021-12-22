import React from "react";
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
    return <div className="likes-list-class">{count}</div>;
    }
}
export default LikeIndex;
