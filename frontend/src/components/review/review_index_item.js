import React,{useEffect,useState} from 'react';


const ReviewIndexItem = ({ review, updateReview,listingId, currentUser, deleteReview }) => {

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
        {
        currentUser && currentUser.id === review.author_id ? (
          <div className='delete-review-show'>
            <button 
            className='btn-delete-review-show'
            onClick={
              () => deleteReview(review._id).then(()=>{
                updateReview(listingId)
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
