import React from 'react';
import { Link } from 'react-router-dom';
import "./recipe_show.css";
import CreateReviewContainer from '../review/review_form_create_container';
import ReviewIndexContainer from "../review/review_index_container";


class RecipeShow extends React.Component {
  componentDidMount() {
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
      <div className="right-left">
        <div className="left-show">
          <div>
            <img src={listing.picture} className="show-img" alt="food"></img>
          </div>
          <div className="detail-padding">
            <p className="listing-detail">{listing.details}</p>
          </div>
          <div className="show-author">
            <p className="show-author-p">Recipe by: {listing.name}</p>
          </div>
          <div>
            <div className="edit-listing">
              {this.props.currentUser.id === listing.author_id ? (
                <div className='edit-div'>
                  <Link
                    to={`/recipes/${listing._id}/edit`}
                    className="edit-show-link"
                  >
                    <p className="updateOrdelete">Update or Delete</p>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="right-show">
          <div className="show-title">
            <p className="show-title-p">{listing.title}</p>
          </div>
          <div className="lishing-show-ingredient">
            <div className="below-ingredient-title">
              <div className="ingredients-word">Ingredients</div>
              <div
                className="show-ingredient-inner"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {listing.ingredients}
              </div>
            </div>
            <div className="instruction-show">
              <div className="instruction-word">Instructions</div>
              <div
                style={{ whiteSpace: "pre-wrap" }}
                className="instruction-show-inner"
              >
                {listing.instruction}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ReviewIndexContainer listingId={listing._id}/>
      </div>
      <div className="bottom-show">
        <CreateReviewContainer listing={listing} listingId={listing._id}/>
      </div>
    </div>
  );
  }
}
export default RecipeShow;