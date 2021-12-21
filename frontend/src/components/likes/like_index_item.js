import React from 'react';
import { Link } from "react-router-dom"


const LikeIndexItem = ({ like, listingId, currentUser, deleteLike }) => {
  return (
    <div>
      <div className="like-index-items">
        {currentUser && currentUser.id !== like.liker_id ? (
          ""
        ) : (
          <div className="like-index-item">
              <Link to={`/recipes/${listingId}`}>recipe</Link>
          </div>
        )}
      </div>
      <div>
        {currentUser && currentUser.id === like.liker_id ? (
          <div>
            <button onClick={() => deleteLike(like._id)}>
              Delete Like
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default LikeIndexItem
