import React from "react";
import RecipeIndexItem from "./recipe_index_item";
import "./recipe_index.css";

class RecipeIndex extends React.Component {
  componentDidMount() {
    this.props.receiveListings()
  }

  render() {
    debugger;
    // if (!this.props.listing) {
    //   return null;
    // }
    const Array = Object.values(this.props.listings)
    return (
      <div className="all">
        {Array.map((listing) => (
          <RecipeIndexItem listing={listing} key={listing._id} />
        ))}
      </div>
    );
  }
}

export default RecipeIndex;