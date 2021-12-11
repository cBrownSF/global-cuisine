import React from 'react';
import { Link } from 'react-router-dom';
import CreateReviewFormContainer from '../review/review_form_create_container';
import ReviewIndexContainer from '../review/review_index_container';
import ReviewIndex from '../review/review_index';
import SearchContainer from "../search/search_container";
class RecipeShow extends React.Component {
  componentDidMount() {
    debugger;
    this.props.receiveListing(this.props.match.params.listingId);
  }
  componentDidUpdate() {
    if (!this.props.listing) {
      this.props.receiveListing(this.props.match.params.listingId);
    }
  }
  render() {
    if (!this.props.listing) {
      return null;
    }
    const listing = this.props.listing
    
    return (
      <div>
        <h1>Show page</h1>
        
        <p><Link to={`/recipes`}>Back to Recipes</Link></p>
        <p>{this.props.currentUser.id === listing.author_id ? <Link to={`/recipes/${listing._id}/edit`}>Edit</Link> : ""}</p>
        <ul>
          <li>{listing.name}</li>
          <li>{listing.ingredients}</li>
          <li>{listing.details}</li>
          <li>{listing.country}</li>
          <li>{listing.title}</li>
          <li>{listing.difficulty}</li>
          <li style={{ whiteSpace: 'pre-wrap' }}>{listing.instruction}</li>
          <li>{listing.picture}</li>
        </ul>
        <ReviewIndexContainer listingId={listing._id}/>
        <CreateReviewFormContainer listingId={listing._id} />
        {/* <SearchContainer /> */}
      </div>
    )
  }
}
export default RecipeShow;