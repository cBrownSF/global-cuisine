import React from 'react';
// import { Link } from 'react-router-dom';


const ReviewIndexItem = ({ review, listingId, userId, deleteReview }) => {
    return (
        <div>
            {listingId !== review.listingId ? (
                ""
            ) : (
            <div className="review-index-items">
                {listingId !== review.listing_id ? "" : 
                    <div className="review-index-item">
                        <div className="review-title">
                            <p>{review.review}</p>
                        </div>
                        <br/>
                        <div className="review-score">
                            <p>{review.score}</p>
                        </div>
                    <br/>
                    </div>
                    }
            </div>
            <div>
                {
                    userId === review.user_id ? (<div><button onClick={() => deleteReview(review._id)}>Delete Review</button></div>) : ""
                }
            </div>
            )}
        </div>
    )
}
export default ReviewIndexItem

// import React from 'react';class ReviewIndexItem extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         const {review, listing, deleteReview, userId} = this.props
//         return (
//           <div>
//             <div>
//               {listing.id !== review.listing_id ? (
//                 " "
//               ) : (
//                 <div className="review-items">
//                   <div className="left-review-item">
//                     <div className="review-item-nickname">
//                       <p className="review-nickname-p">{review.nickname}</p>
//                     </div>
//                     <div className="verified-icon">
//                       <p className="p-verified-buyer">Verified Buyer</p>
//                       <i
//                         className="fas fa-check-circle"
//                         id="verified-icon-symbol"
//                       ></i>
//                     </div>
//                     <div className="icon-recommendation">
//                       {review.rating <= 3 ? (
//                         <div className="recommend-broken-heart">
//                           <i className="fas fa-heart-broken"></i>
//                           <p>I do not recommend this product</p>
//                         </div>
//                       ) : (
//                         <div className="recommend-heart">
//                           <i className="far fa-heart"></i>
//                           <p>I recommend this product</p>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                   <div className="right-review-item">
//                     <div>Overall</div>
//                     <div>
//                       {review.rating === 5 ? (
//                         <img src="/images/5.png" className="star-review"></img>
//                       ) : (
//                         ""
//                       )}
//                       {review.rating === 4 ? (
//                         <img src="/images/4.png" className="star-review"></img>
//                       ) : (
//                         ""
//                       )}
//                       {review.rating === 3 ? (
//                         <img src="/images/3.png" className="star-review"></img>
//                       ) : (
//                         ""
//                       )}
//                       {review.rating === 2 ? (
//                         <img src="/images/2.png" className="star-review"></img>
//                       ) : (
//                         ""
//                       )}
//                       {review.rating === 1 ? (
//                         <img src="/images/1a.png" className="star-review"></img>
//                       ) : (
//                         ""
//                       )}
//                     </div>
//                     <div>
//                       <p>{review.body}</p>
//                     </div>
//                   </div>
//                   <div>
//                     {userId === review.user_id ? (
//                       <div>
//                         <button onClick={() => deleteReview(review.id)}>
//                           Delete Review
//                         </button>
//                       </div>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                   <div className="line-below-review"></div>
//                 </div>
//               )}
//             </div>
//           </div>
//         );
//     }}export default ReviewIndexItem;