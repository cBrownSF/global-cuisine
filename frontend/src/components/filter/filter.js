import React from "react";
import FilterList from "./filter_list";
import "./filter.css"

export default class Filter extends React.Component{

  constructor(props){
    super(props)
    debugger;
    this.handleBtns = this.handleBtns.bind(this);
     this.state = {
       listings: Object.values(this.props.listings),
       listingsCopy: []
     }
  }

  handleBtns = (e) => {
    console.log(e.target.value);
    let listingsCopy;
    if(e.target.value === "All"){
      listingsCopy = this.state.listings
    }else{
      listingsCopy = this.state.listings.filter(listing => listing.country === e.target.value)
    }
    this.setState({
      listingsCopy: listingsCopy,
    });
  }

  componentDidMount(){
    debugger;
    this.props.getListings()
  }

  render(){
    return (
      <div>
        <div className="btns">
          <button value="All" onClick={this.handleBtns}>
            All
          </button>
          <button value="India" onClick={this.handleBtns}>
            India
          </button>
          <button value="France" onClick={this.handleBtns}>
            France
          </button>
          <button value="Italy" onClick={this.handleBtns}>
            Italy
          </button>
        </div>
        <div>
          {this.state.listingsCopy.map((listing) => (
            <FilterList listing={listing} key={listing._id + 12} />
          ))}
        </div>
      </div>
    );
  }

}