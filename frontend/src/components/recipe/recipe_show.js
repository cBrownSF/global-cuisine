import React from 'react';
import { Link } from 'react-router-dom';
import "./recipe_show.css";
import CreateReviewContainer from '../review/review_form_create_container';
import ReviewIndexContainer from "../review/review_index_container";
import CreateLikeContainer from '../likes/like_container';
import LikeIndexContainer from '../likes/like_index_container';

class RecipeShow extends React.Component {
  componentDidMount() {
    this.props.receiveListing(this.props.match.params.listingId);
    this.props.getListingLikes(this.props.match.params.listingId);
  }
  componentDidUpdate() {
    if (!this.props.listing) {
      this.props.receiveListing(this.props.match.params.listingId);
    }
  }
 
  render() {
    if (!this.props.listing) {
      return (
          <div className="all">
          </div>
        )
    }
    const listing = this.props.listing;
    const reviews = this.props.reviews;
    const likes = this.props.likes;
    const user = this.props.currentUser;
    let total_score = 0;
    for (let i = 0; i < reviews.length; i++) {
      let review = reviews[i];
      total_score += review.score;
    }
    let avg_score = 0;
    if (reviews.length === 0){
      avg_score = 0
    }else{
      avg_score = Number(total_score / reviews.length).toFixed(1)
    }

    let liked = false;
    for (let i = 0; i < likes.length; i++) {
      let like = likes[i];
      if (this.props.currentUser && Object.keys(this.props.currentUser).length !== 0 && like.liker_id === user.id && like.listing_id === listing._id){
        liked = true
      }
    }
    
    if (this.props.currentUser && Object.keys(this.props.currentUser).length !== 0 && liked === false && listing.author_id !== user.id){
  return (
    <div className="outermost-show">
      <div className="right-left">
        <div className="left-show">
          <div>
            <img src={listing.picture} className="show-img" alt="food"></img>
          </div>
          <div className="like-index-stars">
            <div>
              <div className="rating-star-length">
                <div className="star-div">
                  {avg_score === 0 ? (
                    <div className="zero-star-icons">
                      <div>
                        <i class="far fa-star"></i>
                      </div>
                      <div>
                        <i class="far fa-star"></i>
                      </div>
                      <div>
                        <i class="far fa-star"></i>
                      </div>
                      <div>
                        <i class="far fa-star"></i>
                      </div>
                      <div>
                        <i class="far fa-star"></i>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {avg_score <= 1 && avg_score !== 0 ? (
                    <div className="one-star-icons">
                      <div className="first-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="second-star">
                        <i className="far fa-star"></i>
                      </div>
                      <div className="third-star">
                        <i className="far fa-star"></i>
                      </div>
                      <div className="fourth-star">
                        <i className="far fa-star"></i>
                      </div>
                      <div className="fourth-star">
                        <i className="far fa-star"></i>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {avg_score < 1.6 && avg_score > 1 ? (
                    <div className="one-half-icons">
                      <div className="first-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="second-star">
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                      <div className="third-star">
                        <i className="far fa-star"></i>
                      </div>
                      <div className="fourth-star">
                        <i className="far fa-star"></i>
                      </div>
                      <div className="fourth-star">
                        <i className="far fa-star"></i>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {avg_score >= 1.6 && avg_score <= 2 ? (
                    <div className="two-star-icons">
                      <div className="first-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="second-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="third-star">
                        <i className="far fa-star"></i>
                      </div>
                      <div className="fourth-star">
                        <i className="far fa-star"></i>
                      </div>
                      <div className="fourth-star">
                        <i className="far fa-star"></i>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {avg_score > 2 && avg_score < 2.6 ? (
                    <div className="two-half-icons">
                      <div className="first-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="second-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="third-star">
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                      <div className="fourth-star">
                        <i className="far fa-star"></i>
                      </div>
                      <div className="fourth-star">
                        <i className="far fa-star"></i>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {avg_score >= 2.6 && avg_score <= 3 ? (
                    <div className="third-star-icons">
                      <div className="first-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="second-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="third-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="fourth-star">
                        <i className="far fa-star"></i>
                      </div>
                      <div className="fourth-star">
                        <i className="far fa-star"></i>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {avg_score > 3 && avg_score < 3.6 ? (
                    <div className="third-half-icons">
                      <div className="first-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="second-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="third-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="fourth-star">
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                      <div className="fifth-star">
                        <i className="far fa-star"></i>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {avg_score >= 3.6 && avg_score <= 4 ? (
                    <div className="fourth-star-icons">
                      <div className="first-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="second-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="third-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="fourth-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="fifth-star">
                        <i className="far fa-star"></i>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {avg_score > 4 && avg_score < 4.6 ? (
                    <div className="fourth-half-icons">
                      <div className="first-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="second-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="third-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="fourth-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="fifth-star">
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {avg_score >= 4.6 && avg_score <= 5 ? (
                    <div className="fifth-star-icons">
                      <div className="first-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="second-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="third-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="fourth-star">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="fifth-star">
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="like-index-create">
              <div>
                {this.props.currentUser &&
                Object.keys(this.props.currentUser).length === 0 ? (
                  ""
                ) : (
                  <CreateLikeContainer
                    listing={listing}
                    listingId={listing._id}
                  />
                )}
              </div>
              <LikeIndexContainer listingId={listing._id} />
            </div>
          </div>
          <div className="detail-padding">
            <p className="listing-detail">{listing.details}</p>
          </div>
          <div className="show-author">
            <p className="show-author-p">Recipe by: {listing.name}</p>
          </div>
          <div>
            <div className="edit-listing">
              {this.props.currentUser &&
              this.props.currentUser.id === listing.author_id ? (
                <div className="edit-div">
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
              <div className="div-ingredientservings">
                <div className="ingredients-word">Ingredients </div>
                <div className="servings-show">
                  ( Servings: {listing.servings} )
                </div>
              </div>
              <div
                className="show-ingredient-inner"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {listing.ingredients}
              </div>
            </div>
            <div className="instruction-show">
              <div className="div-instruction-difficulty">
                <div className="ingredients-word">Instructions </div>
                <div className="difficulty-show">
                  ( Difficulty level: {listing.difficulty} )
                </div>
              </div>
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
        <div className="review-signedIn">
          {this.props.currentUser &&
          Object.keys(this.props.currentUser).length !== 0 ? (
            <div id="writeReview">
              <CreateReviewContainer
                listing={listing}
                listingId={listing._id}
              />
            </div>
          ) : (
            <div className="notloggedIn-review">
              <div>
                Please either create an account or log in to write review.
              </div>
              <div className="signorlog-review">
                <div className="signup-review">
                  <Link to="/signup" className="link-sign-review">
                    Create an Account
                  </Link>
                </div>
                <div>or</div>
                <div className="login-review">
                  <Link to="/login" className="link-login-review">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <div className="break-line-above-reviews"></div> */}
      <div className="review-index-show">
        <ReviewIndexContainer listingId={listing._id} />
      </div>
    </div>
  );
    } else {
      return (
        <div className="outermost-show">
          <div className="right-left">
            <div className="left-show">
              <div>
                <img
                  src={listing.picture}
                  className="show-img"
                  alt="food"
                ></img>
              </div>
              <div className="like-index-stars">
                <div>
                  <div className="rating-star-length">
                    <div className="star-div">
                      {avg_score === 0 ? (
                        <div className="zero-star-icons">
                          <div>
                            <i class="far fa-star"></i>
                          </div>
                          <div>
                            <i class="far fa-star"></i>
                          </div>
                          <div>
                            <i class="far fa-star"></i>
                          </div>
                          <div>
                            <i class="far fa-star"></i>
                          </div>
                          <div>
                            <i class="far fa-star"></i>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {avg_score <= 1 && avg_score !== 0 ? (
                        <div className="one-star-icons">
                          <div className="first-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="second-star">
                            <i className="far fa-star"></i>
                          </div>
                          <div className="third-star">
                            <i className="far fa-star"></i>
                          </div>
                          <div className="fourth-star">
                            <i className="far fa-star"></i>
                          </div>
                          <div className="fourth-star">
                            <i className="far fa-star"></i>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {avg_score < 1.6 && avg_score > 1 ? (
                        <div className="one-half-icons">
                          <div className="first-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="second-star">
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                          <div className="third-star">
                            <i className="far fa-star"></i>
                          </div>
                          <div className="fourth-star">
                            <i className="far fa-star"></i>
                          </div>
                          <div className="fourth-star">
                            <i className="far fa-star"></i>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {avg_score >= 1.6 && avg_score <= 2 ? (
                        <div className="two-star-icons">
                          <div className="first-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="second-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="third-star">
                            <i className="far fa-star"></i>
                          </div>
                          <div className="fourth-star">
                            <i className="far fa-star"></i>
                          </div>
                          <div className="fourth-star">
                            <i className="far fa-star"></i>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {avg_score > 2 && avg_score < 2.6 ? (
                        <div className="two-half-icons">
                          <div className="first-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="second-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="third-star">
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                          <div className="fourth-star">
                            <i className="far fa-star"></i>
                          </div>
                          <div className="fourth-star">
                            <i className="far fa-star"></i>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {avg_score >= 2.6 && avg_score <= 3 ? (
                        <div className="third-star-icons">
                          <div className="first-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="second-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="third-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="fourth-star">
                            <i className="far fa-star"></i>
                          </div>
                          <div className="fourth-star">
                            <i className="far fa-star"></i>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {avg_score > 3 && avg_score < 3.6 ? (
                        <div className="third-half-icons">
                          <div className="first-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="second-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="third-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="fourth-star">
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                          <div className="fifth-star">
                            <i className="far fa-star"></i>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {avg_score >= 3.6 && avg_score <= 4 ? (
                        <div className="fourth-star-icons">
                          <div className="first-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="second-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="third-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="fourth-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="fifth-star">
                            <i className="far fa-star"></i>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {avg_score > 4 && avg_score < 4.6 ? (
                        <div className="fourth-half-icons">
                          <div className="first-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="second-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="third-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="fourth-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="fifth-star">
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {avg_score >= 4.6 && avg_score <= 5 ? (
                        <div className="fifth-star-icons">
                          <div className="first-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="second-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="third-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="fourth-star">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="fifth-star">
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="like-index-create">
                    <LikeIndexContainer listingId={listing._id} />
                </div>
              </div>
              <div className="detail-padding">
                <p className="listing-detail">{listing.details}</p>
              </div>
              <div className="show-author">
                <p className="show-author-p">Recipe by: {listing.name}</p>
              </div>
              <div>
                <div className="edit-listing">
                  {this.props.currentUser &&
                  this.props.currentUser.id === listing.author_id ? (
                    <div className="edit-div">
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
                  <div className="div-ingredientservings">
                    <div className="ingredients-word">Ingredients </div>
                    <div className="servings-show">
                      ( Servings: {listing.servings} )
                    </div>
                  </div>
                  <div
                    className="show-ingredient-inner"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {listing.ingredients}
                  </div>
                </div>
                <div className="instruction-show">
                  <div className="div-instruction-difficulty">
                    <div className="ingredients-word">Instructions </div>
                    <div className="difficulty-show">
                      ( Difficulty level: {listing.difficulty} )
                    </div>
                  </div>
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
            <div className="review-signedIn">
              {this.props.currentUser &&
              Object.keys(this.props.currentUser).length !== 0 ? (
                <div id="writeReview">
                  <CreateReviewContainer
                    listing={listing}
                    listingId={listing._id}
                  />
                </div>
              ) : (
                <div className="notloggedIn-review">
                  <div>
                    Please either create an account or log in to write review.
                  </div>
                  <div className="signorlog-review">
                    <div className="signup-review">
                      <Link to="/signup" className="link-sign-review">
                        Create an Account
                      </Link>
                    </div>
                    <div>or</div>
                    <div className="login-review">
                      <Link to="/login" className="link-login-review">
                        Log in
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* <div className="break-line-above-reviews"></div> */}
          <div className="review-index-show">
            <ReviewIndexContainer listingId={listing._id} />
          </div>
        </div>
      );
    }
  }
}
export default RecipeShow;