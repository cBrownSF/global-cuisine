import React from 'react';
import { hashHistory } from 'react-router';


const ReviewIndexItem = ({ review, listingId, currentUser, deleteReview }) => {
  debugger;
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
            <button onClick={
              () => deleteReview(review._id).then(()=>{
                debugger;
                hashHistory.push(`recipes/${listingId}`)
              }

              )
                
              }>
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
