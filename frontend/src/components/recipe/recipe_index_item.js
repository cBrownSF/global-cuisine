import React from "react";
import { Link } from "react-router-dom";
const RecipeIndexItem = (props) => {
  return <li>
    <p className='index-item'><Link className="index-link" to={`/listings/${props.listing._id}`}>{props.listing.title}</Link></p>
  </li>
}

export default RecipeIndexItem;