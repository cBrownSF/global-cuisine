import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
  // constructor(props) {
  //   super(props)
    
  // }
  componentDidMount() {
    this.props.getListingReviews(this.props.listingId)
    // this.props.getReviews()
  }
 
  render(){
    if (!this.props.reviews) return null;
    const { reviews, listingId, currentUser, getListingReviews,deleteReview } = this.props;
   
    return (
      <div className="reviews-list-class">
        {reviews.length === 0 ? (
          <div className="no-reviews-show">
            <p>No reviews yet</p>
          </div>
        ) : (
          <div className="title-of-all-reviews">
            <h1 className="reviews-title"><p>Reviews</p></h1>
            <ul>
              {reviews.map((review) => (
                <ReviewIndexItem
                  review={review}
                  currentUser={currentUser}
                  listingId={listingId}
                  deleteReview={deleteReview}
                  updateReview={getListingReviews}
                  key={review._id + "z"}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
    }
}

export default ReviewIndex;

