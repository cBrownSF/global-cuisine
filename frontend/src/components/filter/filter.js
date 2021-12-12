import React, { Component } from 'react'
import "./filter.css";
import FilterList from "./filter_list";

export default class Filter extends Component {
    constructor(props){
        super(props);
        this.handleBtns = this.handleBtns.bind(this);
        this.state={
            products: this.props.listings,
            productCopy: []
        }
    }

    componentDidMount(){
        this.props.getListings();
    }

    handleBtns = (e) => {
        console.log(e.target.value);
     let productCopy;

     if(e.target.value === "All"){
         productCopy = this.state.products;
     }else{
         productCopy = this.state.products.filter(product => product.country === e.target.value)
     }

     this.setState({
        productCopy: productCopy})

    }

    render() {
        return (
          <div>
            <div className="btns">
              <button value="All" onClick={this.handleBtns}>
                ALL
              </button>
              <button value="Italy" onClick={this.handleBtns}>
                Italy
              </button>
              <button value="India" onClick={this.handleBtns}>
                India
              </button>
              <button value="France" onClick={this.handleBtns}>
                France
              </button>
            </div>
            <div className="products-center">
              {this.state.productCopy.map((product, index) => (
                <FilterList
                  product={product}
                  key={product._id * index}
                />
              ))}
            </div>
          </div>
        );
    }
}
