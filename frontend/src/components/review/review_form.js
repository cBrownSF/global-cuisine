import React from 'react';
// import { withRouter } from 'react-router';
class ReviewForm extends React.Component {
  constructor(props) {

    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    const listing_id = this.props.listingId
    const review = Object.assign({}, this.state, {
      listing_id
    });
 
    if (this.props.currentUser && this.props.currentUser.id !== this.props.listing.author_id) {
   
      this.props.submitReview(review)
      // .then(() => this.props.history.push("/"));
    }
  }
  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }
  render() {
    
    if (!this.props.review) return null
    return (
      <div className="Main-Review-Form">
        <h3>Leave a review</h3>
        <form onSubmit={this.handleSubmit}>
          <br />
          <p>{this.props.review.reviewer_name}</p>
          <label>Review
            <textarea
              value={this.state.review}
              onChange={this.update('review')}
            />
          </label>
          <br />
          <label>Score
            <input
              type="number"
              value={this.state.score}
              onChange={this.update('score')}
            />
          </label>
          <br />
          <button type='submit' className="Create-Review-Button">{this.props.formType}</button>
        </form>
      </div>
    )
  }
}
export default ReviewForm