import React from "react";
import "./recipe_index.css"
import { Link } from "react-router-dom";
const RecipeIndexItem = (props) => {
  const {listing} = props;
  return (
    <div className="each-recipe">
      <Link to={`/recipes/${listing._id}`} className="link-show">
        <div className="index-item-image">
          <img
            src={listing.picture}
            alt="food-pic"
            className="images-index"
          ></img>
        </div>
        <div className="title-div">
          <p className="title-index">{listing.title}</p>
        </div>
      </Link>
    </div>
  );
}

export default RecipeIndexItem;


