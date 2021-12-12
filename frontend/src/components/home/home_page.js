import React from "react";
import "./home.css";
import FilterContainer from "../filter/filter_container";

class HomePage extends React.Component {
  render() {
    return (
      <div className="outer-div-home">
        <div className="inner-div">
          <FilterContainer />
          <div className="detail-home">
            <h1 className="home-phase">Explore the world</h1>
            <h2 className="below-home-phase">through food</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
