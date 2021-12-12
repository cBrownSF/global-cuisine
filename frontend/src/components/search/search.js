import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router";

import "./search.css";
import { hashHistory } from "react-router";

function Search(props) {

  useEffect(() => {
    debugger;
    props.getListings();
  }, []);
  const [filteredListing, setFilteredListing] = useState([]);
  const [inputWord, setInputWord] = useState("");
  const handleChange = (event) => {
    const wordEntered = event.target.value;
    setInputWord(wordEntered);
    let filteredArray = listings.filter((listing) => {
      return listing.title.toLowerCase().includes(wordEntered.toLowerCase());
    });
    if (wordEntered === "") {
      setFilteredListing([]);
    } else {
      setFilteredListing(filteredArray);
    }
  };
  const clearField = () => {
    setFilteredListing([]);
    setInputWord("");
  };
  const clearListingShow = (listingId) => {
    hashHistory.push(`/recipes/${listingId}`);
    clearField();
  };
  const { listings } = props;
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="SEARCH ENTIRE STORE HERE"
          onChange={handleChange}
          value={inputWord}
        />
        <div className="icons">
          {filteredListing.length === 0 ? (
            <i className="fas fa-search" id="search-icon"></i>
          ) : (
            <i className="fas fa-times" id="clearBtn" onClick={clearField}></i>
          )}
        </div>
      </div>
      {filteredListing.length !== 0 && (
        <div className="listingResult">
          {filteredListing.slice(0, 5).map((listing) => {
            return (
              // <Link to={`/recipes/${listing._id}`}
              //   className="dataItem"
              // onClick={() => clearListingShow(listing._id)}
              //   key={listing._id}
              // >
              //   <p>{listing.title}</p>
              // </Link>
              <div
                className="dataItem"
                onClick={() => clearListingShow(listing._id)}
                key={listing._id}
              >
                <p>{listing.title}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default Search;