import React from "react";
import FilterList from "./filter_list";
import "./filter.css"

export default class Filter extends React.Component{

  constructor(props){
    super(props)
  
    this.state = {
      listings: Object.values(this.props.listings),
      listingsCopy: []
    }
    this.handleBtns = this.handleBtns.bind(this);
  }

  countryBtns = () => {
    
  }
  
  handleBtns = (e) => {
    let listingsCopy;
    if(e.target.value === "All"){
      listingsCopy = this.props.listings
    }else{
      listingsCopy = this.props.listings.filter(listing => listing.country === e.target.value)
    }
    this.setState({
      listingsCopy: listingsCopy,
    });
  };
  componentDidMount() {
    this.props.getListings();
  }
  render() {
    let countryArray = ["Italy"];
    for (let i = 0; i < this.state.listings.length - 1; i++) {
      if (
        this.state.listings[i].country !== this.state.listings[i + 1].country
      ) {
        countryArray.push(this.state.listings[i].country);
      }
    }
    return (
      <div className="filter-index">
        <div className="btns">
          <button value="All" onClick={this.handleBtns}>
            All
          </button>
          {countryArray.forEach((country) => {
            <button value={country} onClick={this.handleBtns}>
              {country}
            </button>;
          })}
        </div>
        <div className="filter-recipes">
          {this.state.listingsCopy.map((listing) => (
            <FilterList listing={listing} key={listing._id + 12} />
          ))}
        </div>
      </div>
    );
  }
}
