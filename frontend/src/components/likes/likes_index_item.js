import React from "react";
const LikeIndexItem = ({ like, listingId, currentUser, deleteLike }) => {
  return (
    <div>
      {/* <div className="like-index-items">
        {currentUser.id !== like.liker_id ? (
          ""
        ) : (
          <div className="like-index-item">
            <Link to={`/recipes/${listingId}`}>recipe</Link>
          </div>
        )}
      </div> */}
      {/* <div> */}
        {currentUser.id === like.liker_id && listingId === like.listing_id ? (
          <div>
            <button onClick={() => deleteLike(like._id)}>Remove Like</button>
          </div>
        ) : (
          ""
        )}
      {/* </div> */}
    </div>
  );
};
export default LikeIndexItem;
