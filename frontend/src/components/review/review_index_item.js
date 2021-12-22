import React,{useEffect,useState} from 'react';


const ReviewIndexItem = ({ review, updateReview,listingId, currentUser, deleteReview }) => {
const [count, setCount] =useState(0)
function decrementCount(){
  setCount(prevCount => prevCount -1)
}
 useEffect(() =>{
   updateReview(listingId)
 },[count])
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
                decrementCount()
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
