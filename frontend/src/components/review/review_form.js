import React from 'react';
// import { withRouter } from 'react-router';
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
    return (
      <div className="Main-Review-Form">
        <div className="review-errors">{this.renderErrors()}</div>
        <h3>Leave a review</h3>
        <form onSubmit={this.handleSubmit}>
          <br />
          <label>
            Review
            <textarea
              value={this.state.review}
              onChange={this.update("review")}
            />
          </label>
          <br />
          <label>
            Score
            <input
              type="text"
              value={this.state.score}
              onChange={this.update("rating")}
            />
          </label>
          <label>
            Name
            <input
              type="text"
              value={this.state.reviewer_name}
              onChange={this.update("reviewer_name")}
            />
          </label>
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
    );
  }
}

export default ReviewForm;
