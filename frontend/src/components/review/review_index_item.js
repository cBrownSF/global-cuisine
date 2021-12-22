import React from 'react';
// import { Link } from 'react-router-dom';


const ReviewIndexItem = ({ review, listingId, currentUserId, deleteReview }) => {
  return (
    <div>
      <div className="review-index-items">
        {listingId !== review.listing_id ? (
          ""
        ) : (
          <div className="review-index-item">
            <div>{review.reviewer_name}</div>
            <div className="review-score">
              <p>Rating: {review.score}</p>
            </div>
            <div className="review-title">
              <p>{review.review}</p>
            </div>
          </div>
        )}
      </div>
      <div>
        {currentUserId === review.author_id ? (
          <div>
            <button className="delete-review-show" onClick={() => deleteReview(review._id)}>
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
