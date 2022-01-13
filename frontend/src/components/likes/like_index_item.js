import React from 'react';
import { Link } from "react-router-dom"


const LikeIndexItem = ({ like, listingId, currentUser, deleteLike }) => {
  return (
    <div>
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
