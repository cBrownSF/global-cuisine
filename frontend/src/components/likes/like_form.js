import React from 'react';
// import { withRouter } from 'react-router';
class LikeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.like;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    // const listingId = this.props.listingId;
    const like = Object.assign({}, this.state
      // listingId,
    );
    debugger
    if (
      this.props.currentUser 
    ) {
      this.props
        .submitLike(like)
        .then(this.props.removeLikeErrors());
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
          <button
            type="submit"
            value={this.props.formType}
            className="Like Recipe"
          >
            {this.props.formType}
          </button>
        </form>
      </div>
    );
  }
}

export default LikeForm;
