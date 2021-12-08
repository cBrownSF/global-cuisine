import React from "react";
import RecipeIndexItem from "./recipe_index_item";

class RecipeIndex extends React.Component {
  constructor(props) {
    super(props)
    
  }
  componentDidMount() {
    this.props.receiveListings()
  }

  render() {
    // if (!this.props.listing) {
    //   return null;
    // }
    const Array = Object.values(this.props.listings)

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