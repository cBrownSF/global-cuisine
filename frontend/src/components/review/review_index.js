import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
  // constructor(props) {
  //   super(props)
    
  // }
  componentDidMount() {
    this.props.receiveReviews()
  }

  render(){
    const { reviews, listingId, user_id, listing } = this.props
    if(!this.props.reviews) {
        return null
    }
    return (
        <div className="reviews-list-class">
            <div className="title-of-all-reviews">
            <h1>Reviews</h1>
            </div>
            <ul>
                {
                    reviews.map((review, id) => <ReviewIndexItem review={review} user_id={user_id} listingId={listingId} listing={listing}  key={id}/>)
                }
            </ul> 
            <br/>
        </div>
        )
    }
}

export default ReviewIndex;

// import React from 'react';
// import ReactIndexItem from './review_index_item';

// class ReviewIndex extends React.Component{
//     render(){
//         const {
//           reviews,
//           listing,
//           deleteReview,
//           userId,
//         } = this.props;
//         return (
//           <div>
//             {listing.review_ids.length === 0 ? (
//               <div className="no-review">
//                 <p>No Review</p>
//               </div>
//             ) : (
//               <ul>
//                 {reviews.map((review) => (
//                   <ReactIndexItem
//                     key={review.id}
//                     review={review}
//                     deleteReview={deleteReview}
//                     userId={userId}
//                     listing={listing}
//                   />
//                 ))}
//               </ul>
//             )}
//           </div>
//         );
//     }
// }export default ReviewIndex