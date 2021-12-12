import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
  // constructor(props) {
  //   super(props)
    
  // }
  componentDidMount() {
    this.props.getListingReviews(this.props.listingId)
  }

  render(){
    if (!this.props.reviews) return null;
    const { reviews, listingId, userId, deleteReview } = this.props
   
    return (
      <div className="reviews-list-class">
        <div className="title-of-all-reviews">
          <h1>Reviews</h1>
        </div>
        <ul>
          {reviews.map((review) => (
            <ReviewIndexItem
              review={review}
              userId={userId}
              listingId={listingId}
              deleteReview={deleteReview}
              key={review._id}
            />
          ))}
        </ul>
        <br />
      </div>
    );
    }
}

export default ReviewIndex;