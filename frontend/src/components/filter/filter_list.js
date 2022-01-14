import React from "react";
import { Link } from "react-router-dom";
import "./filter.css";
export default function FilterList({listing}){
  return (
    <div className="filter-item">
      {/* <button onClick={()=>hashHistory.push(`/recipes/${listing._id}`)} className="single">{listing.title}</button> */}
      <Link to={`/recipes/${listing._id}`} className="link-filter">
        <div className="filter-item-image">
          <img
            src={listing.picture}
            alt="food-pic"
            className="images-filter"
          ></img>
        </div>
        <div className="title-div-filter">
          <p className="title-filter">{listing.title}</p>
        </div>
      </Link>
    </div>
  );
}

