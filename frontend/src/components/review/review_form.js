import React from 'react';
import './review_form.css';
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
    if (this.props.currentUser !== null &&
      Object.keys(this.props.currentUser).length !== 0 &&
      this.props.currentUser.id !== this.props.listing.author_id
    ) {
      this.props
        .submitReview(review)
        .then(
          this.setState({
            reviewer_name: "",
            review: "",
            score: "5",
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
    if (this.props.currentUser &&
      Object.keys(this.props.currentUser).length !== 0 &&
      this.props.currentUser.id !== this.props.listing.author_id
    ){
    return (
      <div className="Main-Review-Form">
        <div className="review-errors">{this.renderErrors()}</div>
        <div className="Review-Page">
        <h3 className="review-header">Leave a review</h3>
        <form onSubmit={this.handleSubmit}>
          <br />
          <div className="review-create">
            <div className="review-text">
          <label>
            Review
            <textarea
              value={this.state.review}
              onChange={this.update("review")}
              className="review-input"
            />
          </label>
          </div>
          </div>
          <br />
          <div className="score-create">
            <div className="score-text">
          <label>
            Score
            <input
              type="text"
              value={this.state.score}
              onChange={this.update("rating")}
              className="score-input"
            />
          </label>
          </div>
          </div>
          <div className="review-name-create">
            <div className="review-name-text">
          <label>
            Name
            <input
              type="text"
              value={this.state.reviewer_name}
              onChange={this.update("reviewer_name")}
              className="review-name-input"
            />
          </label>
          </div>
          </div>
          <br />
          <button
            type="submit"
            value={this.props.formType}
            className="Create-Review-Button"
          >
            {this.props.formType}
          </button>
        </form>
        </div>
      </div>
      )
    }if (this.props.currentUser &&
      Object.keys(this.props.currentUser).length !== 0 &&
      this.props.currentUser.id === this.props.listing.author_id
    ){
      return(
        <div>
          <p>Sorry, but you can't review your own Recipe!</p>
        </div>
      )}
      else{
      return(
        <div>
          <p>Don't have an account? <Link className="login-sign-up-link" to='/signup'>Sign up to review this recipe!</Link ></p>
          <p>Already a member? <Link className="login-sign-up-link" to='/login'>Log in to add your review!</Link ></p>
        </div>
      )
    }
  }
}

export default ReviewForm;
