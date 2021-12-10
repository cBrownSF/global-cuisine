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
    const { reviews, listing_id, user_id } = this.props
    return (
        <div className="reviews-list-class">
            <div className="title-of-all-reviews">
            <h1>Reviews</h1>
            </div>
            <ul>
                {
                    reviews.map(review => <ReviewIndexItem review={review} user_id={user_id} listing_id={listing_id}  key={review.id}/>)
                }
            </ul> 
            <br/>
        </div>
        )
    }
}

export default ReviewIndex;