import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props)
    
  }
  componentDidMount() {
    this.props.receiveReviews()
  }

  render() {

    const Array = Object.values(this.props.reviews)

    return (
      <div>
        <h1>All Recipes: </h1>
        {Array.map(listing => (
          <RecipeIndexItem
            listing={listing}
            key={listing.id}
          />
        ))}
      </div>
    )
  }
}

export default RecipeIndex;