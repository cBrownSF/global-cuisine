import React from "react";
import FilterList from "./filter_list";
import "./filter.css";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: Object.values(this.props.listings),
      listingsCopy: [],
    };
    this.handleBtns = this.handleBtns.bind(this);
  }
  handleBtns = (e) => {
    let listingsCopy;
    if (e.target.value === "All") {
      listingsCopy = this.props.listings;
    } else {
      listingsCopy = this.props.listings.filter(
        (listing) => listing.country === e.target.value
      );
    }
    this.setState({
      listingsCopy: listingsCopy,
    });
  };
  componentDidMount() {
    this.props.getListings();
  }
  render() {
    return (
      <div className="filter-index">
        <div className="btns">
          {/* <button value="All" onClick={this.handleBtns}>
            All
          </button> */}
          <button value="India" onClick={this.handleBtns}>
            India
          </button>
          <button value="France" onClick={this.handleBtns}>
            France
          </button>
          <button value="Italy" onClick={this.handleBtns}>
            Italy
          </button>
          <button value="Korea" onClick={this.handleBtns}>
            Korea
          </button>
          <button value="Vietnam" onClick={this.handleBtns}>
            Vietnam
          </button>
          <button value="Mexico" onClick={this.handleBtns}>
            Mexico
          </button>
          <button value="Peru" onClick={this.handleBtns}>
            Peru
          </button>
          <button value="China" onClick={this.handleBtns}>
            China
          </button>
          <button value="Ethiopia" onClick={this.handleBtns}>
            Ethiopia
          </button>
          <button value="Other" onClick={this.handleBtns}>
            Other
          </button>
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