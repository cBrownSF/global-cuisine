import React from 'react';
// import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderReviewErrors = this.renderReviewErrors.bind(this);
    this.numberInput =this.numberInput.bind(this)
  }

  componentDidMount() {
    this.props.removeReviewErrors()
  }

  handleSubmit(e) {
    e.preventDefault();
    const listingId = this.props.listingId;
    const review = Object.assign({}, this.state, {
      listingId,
    });  
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

  renderReviewErrors() {
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
  numberInput(type) {
    const regex = /^[1-5\b]+$/;

    return e => {
      if (e.currentTarget.value === '' || regex.test(e.currentTarget.value) && e.currentTarget.value.length <= 1) {
        this.setState({ [type]: e.currentTarget.value })
      }
    }
  } 
  
  render() {
    {
    return (
      <div className="Main-Review-Form">
        <div className="review-signedIn">
          {this.props.currentUser &&
            Object.keys(this.props.currentUser).length !== 0 &&
            this.props.currentUser.id === this.props.listing.author_id ? (
            ""
          ) : (
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
                        className="name-input-show"
                        placeholder="  Enter your name"
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
                        placeholder=" Enter the details"
                      />
                    </div>
                  </div>
                  <div className="score-input-review">
                    <div>Score</div>
                    <div>
                      <input
                        type="text"
                        value={this.state.score}
                        onChange={this.numberInput("score")}
                        className="score-input"
                        placeholder="  Enter a number ranging 1 to 5"
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
                <div className="review-errors">{this.renderReviewErrors()}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
    }
  }
}

export default ReviewForm;
