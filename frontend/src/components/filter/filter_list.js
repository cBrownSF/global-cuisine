import React from "react";
import { hashHistory } from "react-router";
export default function FilterList({ listing }) {
  return (
    <div>
      <button
        onClick={() => hashHistory.push(`/recipes/${listing._id}`)}
        className="single"
      >
        {listing.title}
      </button>
    </div>
  );
}

