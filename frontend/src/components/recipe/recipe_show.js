import React from 'react';
import "./recipe_show.css";
// import CreateReviewFormContainer from '../review/review_form_create_container'

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
      {/* <p><Link to={`/listings/${this.props.listing._id}/edit`}>Edit</Link></p> */}
      {/* <ul>
        <li>{listing.name}</li>
        <li>{listing.ingredients}</li>
        <li>{listing.details}</li>
        <li>{listing.country}</li>
        <li>{listing.title}</li>
        <li>{listing.difficulty}</li>
        <li>{listing.instruction}</li>
        <li>{listing.picture}</li>
        </ul> */}
      {/* <p>
        {this.props.currentUser.id === listing.author_id ? (
          <Link to={`/recipes/${listing._id}/edit`}>Edit</Link>
        ) : (
          ""
        )}
      </p> */}

      <div className="right-left">
        <div className="left-show">
          <div>
            <img src={listing.picture} className="show-img" alt="food"></img>
          </div>
          <div>
            <p className="listing-detail">{listing.details}</p>
          </div>
          <div className="show-author">
            <p className="show-author-p">Recipe by: {listing.name}</p>
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
            <div>
              <div style={{ whiteSpace: "pre-wrap" }}>
                {listing.instruction}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-show"></div>
    </div>
  );
  }
}
export default RecipeShow;