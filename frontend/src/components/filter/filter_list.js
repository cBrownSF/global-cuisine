
import React from "react";

export default function FilterList({product}){
    return (
      <div>
        <div className="single">
          <h1>{product.country}</h1>
        </div>
      </div>
    );

}