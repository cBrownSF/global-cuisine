import React from "react";
import RecipeIndexItem from "./recipe_index_item";
import "./recipe_index.css";

class RecipeIndex extends React.Component {
  componentDidMount() {
    this.props.receiveListings()
  }

  render() {
  
      if (this.props.listings.length < 2) {
        return (
          <div className="all">
          </div>
        )
      }else{
        return (
          <div className="all">
            {this.props.listings.map((listing) => (
              <RecipeIndexItem listing={listing} key={listing._id} />
            ))}
          </div>
        );
      }
  
    
  }
}

export default RecipeIndex;