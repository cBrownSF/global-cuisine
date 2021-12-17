import React from "react";
class LikeIndex extends React.Component {

  componentDidMount() {
    this.props.getLikes();
  }

  render() {
             if (!this.props.likes) return null;
             const { likes, listingId, deleteLike, currentUserId } = this.props;
             let likeListingArray = [];
             let count = 1;
             likes.forEach((like) => {
               if (like.listing_id === listingId) {
                 likeListingArray.push(like);
               }
             });
             
               for (let i = 0; i < likeListingArray.length-1; i++) {
                 if (
                   likeListingArray[i].liker_id !== likeListingArray[i + 1].liker_id
                 ) {
                   count += 1;
                 }
                }
             return <div className="likes-list-class">{count}</div>;
           }
}
export default LikeIndex;
