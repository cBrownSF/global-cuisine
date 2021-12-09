import React from "react";
import { Link, withRouter } from "react-router-dom";
import {browserHistory} from "react-router"

class EditRecipeForm extends React.Component {
  constructor(props) {
    super(props)

      const listing = this.props.listing
    this.state = {
      name: listing.name,
      author_id: this.props.currentUser.id,
      ingredients: listing.ingredients,
      instruction: listing.instruction,
      details: listing.details,
      difficulty: listing.difficulty,
      servings: listing.servings,
      title: listing.title,
      picture: listing.picture,
      country: 'Italy',
      editId:this.props.listing._id
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.receiveListing(this.props.match.params.listingId);
  }

  componentDidUpdate() {
    if (!this.props.listing) {
      this.props.receiveListing(this.props.match.params.listingId);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  handleInput(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  render() {
    if (!this.props.listing) {
      return null;
    }
    return (
      <div>
        {/* <p> <Link to={`/listings/${listing.id}/edit`}>Edit</Link></p> */}
        <form onSubmit={this.handleSubmit}>
          <div>
            <br />
            <input type="text"
              value={this.state.title}
              onChange={this.handleInput('title')}
              placeholder="title of recipe"
            />
            <br />
            <input type="text"
              value={this.state.ingredients}
              onChange={this.handleInput('ingredients')}
              placeholder="ingredients"
            />
            <br />
            <input type="text"
              value={this.state.servings}
              onChange={this.handleInput('servings')}
              placeholder="how many servings"
            />
            <br />
            <input type="text"
              value={this.state.picture}
              onChange={this.handleInput('picture')}
              placeholder="Add a picture"
            />
            <br />
            <input type="text"
              value={this.state.name}
              onChange={this.handleInput('name')}
              placeholder="your name"
            />
            <br />
            <input type="text"
              value={this.state.details}
              onChange={this.handleInput('details')}
              placeholder="Add a succinct description"
            />
            <br />
            <textarea
              value={this.state.instruction}
              onChange={this.handleInput('instruction')}
              placeholder="Add your instructions here"
            />
            <br />
            <label>Country
              <select value={this.state.country} onChange={this.handleInput('country')}>
                <option value="Italy">Italy</option>
                <option value="France">France</option>
                <option value="India">India</option>
              </select>
            </label>
            <label>Difficulty
              <select value={this.state.difficulty} onChange={this.handleInput('difficulty')}>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </label>
            <br />
            <button onClick={() => this.props.deleteListing(this.props.listing._id)}>delete listing</button>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}


export default EditRecipeForm;