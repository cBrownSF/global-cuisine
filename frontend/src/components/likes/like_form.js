import React from 'react';
// import { withRouter } from 'react-router';
class LikeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.like;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount(){
    this.props.getLikes()
  }

  handleSubmit(e) {
    e.preventDefault();
    const like = Object.assign(
      {},
      this.state
    );
    if (this.props.currentUser) {
      this.props
        .submitLike(like.listing_id)
        .then(this.props.removeLikeErrors())
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
      <div className="Main-Like-Form">
        {this.props.currentUser.id === this.props.listing.author_id ? "" : 
        <form onSubmit={this.handleSubmit}>
            <button
              type="submit"
            >
              <i className="fas fa-thumbs-up" id="thumbup"></i>
            </button>
        </form>
        }
      </div>
    );
  }
}

export default LikeForm;
