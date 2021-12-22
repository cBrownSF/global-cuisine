import React from 'react';
// import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const listingId = this.props.listingId;
    const review = Object.assign({}, this.state, {
      listingId,
    });
    if (
      this.props.currentUser &&
      this.props.currentUser.id !== this.props.listing.author_id
    ) {
      this.props
        .submitReview(review)
        .then(
          this.setState({
            reviewer_name: "",
            review: "",
            score: "",
          })
        )
        .then(this.props.removeReviewErrors());
    }
  }

  renderErrors() {
    return (
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error ${i}`}>{error}</li>
          ))}
        </ul>
    );
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }
  render() {
    return (
      <div className="Main-Review-Form">
        <div className="review-signedIn">
          {this.props.currentUser.id !== undefined ? (
            <div className="review-loggedIn">
              <div className="leave-review-div">
                <h3 className="leave-review-inner">Leave a review</h3>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="reviews-create-show">
                  <div className="name-input-review">
                    <div className="text-name-review">
                      <p>Name</p>
                    </div>
                    <div>
                      <input
                        type="text"
                        value={this.state.reviewer_name}
                        onChange={this.update("reviewer_name")}
                        className="name-input"
                      />
                    </div>
                  </div>
                  <div className="body-input-review">
                    <div className="text-body-review">
                      <p>Review</p>
                    </div>
                    <div>
                      <textarea
                        value={this.state.review}
                        onChange={this.update("review")}
                        className="body-input"
                      />
                    </div>
                  </div>
                  <div className="score-input-review">
                    <div>Score</div>
                    <div>
                      <input
                        type="text"
                        value={this.state.score}
                        onChange={this.update("score")}
                        className="score-input"
                      />
                    </div>
                  </div>
                  <div className="div-button-review">
                    <button
                      type="submit"
                      value={this.props.formType}
                      className="Create-Review-Button"
                    >
                      {this.props.formType}
                    </button>
                  </div>
                </div>
              </form>
              <div>
                <div className="review-errors">{this.renderErrors()}</div>
              </div>
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
    );
  }
}

export default ReviewForm;
