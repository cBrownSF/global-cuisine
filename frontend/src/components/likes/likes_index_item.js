import React from "react";
import "./like.css";
const LikeIndexItem = ({ like, updateLike,listingId, currentUser, deleteLike }) => {
  return (
    <div>
      {currentUser &&
      currentUser.id === like.liker_id &&
      listingId === like.listing_id ? (
        <div className="delete-like">
          <button
            onClick={() =>
              deleteLike(like._id).then(() => {
                updateLike(listingId);
              })
            }
          >
            <i className="fas fa-thumbs-down" id="thumbdownlike"></i>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default LikeIndexItem;