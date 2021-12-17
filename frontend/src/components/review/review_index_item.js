import React from 'react';
// import { Link } from 'react-router-dom';


const ReviewIndexItem = ({ review, listingId, currentUser, deleteReview }) => {
  return (
    <div>
      <div className="review-index-items">
        {listingId !== review.listing_id ? (
          ""
        ) : (
          <div className="review-index-item">
            <div className="review-title">
              <p>{review.review}</p>
            </div>
            <br />
            <div className="review-score">
              <p>{review.score}</p>
            </div>
            <br />
          </div>
        )}
      </div>
      <div>
        {
        currentUser && currentUser.id === review.author_id ? (
          <div>
            <button onClick={() => deleteReview(review._id)}>
              Delete Review
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default ReviewIndexItem
