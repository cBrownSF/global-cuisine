import React from "react";

class Listing extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
          <div>
           <img src="https://global-cuisine.s3.us-west-1.amazonaws.com/cotton.jpeg"></img>
          </div>
        );
    }
}

export default Listing;

