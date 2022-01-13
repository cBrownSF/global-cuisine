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
    // const listingId = this.props.listingId;
    const like = Object.assign(
      {},
      this.state
      // listingId,
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

    let istoggleOn = false;
    for (let i = 0; i < this.props.likes.length; i++){
      if(this.props.currentUser && this.props.likes[i].liker_id === this.props.currentUser.id && this.props.likes[i].listing_id === this.state.listing_id){
        istoggleOn = true
      }else{
        istoggleOn = false
      }
    }
    
    return (
      <div className="Main-Review-Form">
        {this.props.currentUser.id === this.props.listing.author_id ? "" : 
        <form onSubmit={this.handleSubmit}>
          {istoggleOn === true ? (
            <button type="submit" className="alreadyLiked" disabled>
              <i className="fas fa-thumbs-up" id="already-thumbup"></i>
            </button>
          ) : (
            <button
              type="submit"
              className="likeRecipe"
            >
              <i className="far fa-thumbs-up" id="thumbup"></i>
            </button>
          )}
        </form>
        }
      </div>
    );
  }
}

export default LikeForm;
