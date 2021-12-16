import React from 'react';
// import { withRouter } from 'react-router';
class LikeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liker_id: this.props.likerId,
      listing_id: this.props.listingId,
      isToggleOn: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    // this.handleClick = this.handleClick.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault();
    // const listingId = this.props.listingId;
    const like = Object.assign({}, this.state
      // listingId,
    );
    if (
      this.props.currentUser
    ) {
      this.props
        .submitLike(like.listing_id)
        .then(this.props.removeLikeErrors())
        .then(this.setState( state => ({
          isToggleOn: false
        })))
    }
  }

  // handleClick(){
  //   this.setState(state => ({
  //     isToggleOn: false
  //   }))
  // }

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
        <form onSubmit={this.handleSubmit}>
          {this.state.isToggleOn ? (
            <button
              type="submit"
              value={this.props.formType}
              className="likeRecipe"
              // onClick={this.handleClick}
            >
              {this.props.formType}
            </button>
          ) : (
            <button
              type="submit"
              value={this.props.formType}
              className="likeRecipe"
              // onClick={this.handleClick}
              disabled
            >
              {this.props.formType}
            </button>
          )}
          {/* {this.state.isToggleOn ? "ON" : "OFF"} */}
        </form>
      </div>
    );
  }
}

export default LikeForm;
