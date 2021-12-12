import React from "react";

export default function FilterList({listing}){
  return (
    <div>
      <div className="single">{listing.title}</div>
    </div>
  );
}