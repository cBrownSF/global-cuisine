import React from "react";
import { withRouter } from "react-router-dom";
class EditRecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    this.props.clearErrors()
    this.props
      .receiveListing(this.props.match.params.listingId)
      .then((listing) => {
        return this.setState({
          name: listing.listing.data.name,
          ingredients: listing.listing.data.ingredients,
          instruction: listing.listing.data.instruction,
          details: listing.listing.data.details,
          difficulty: listing.listing.data.difficulty,
          servings: listing.listing.data.servings,
          title: listing.listing.data.title,
          picture:
            "https://global-cuisine.s3.us-west-1.amazonaws.com/worldflags.jpeg",
          country: listing.listing.date.country,
          editId: listing.listing.data._id,
        });
      });
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
  handleKeyPress(field) {
    return (e) => {
      if (e.key === "Enter") {
        this.setState({
          [field]: e.currentTarget.value + "\n",
        });
      }
    };
  }
  handleInput(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }
  renderErrors() {
    return (
      <ul>
        {Object.values(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }
  render() {
    console.log(this.state);
    if (!this.props.listing) {
      return null;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h1 id="title">Edit your recipe</h1>
            <br />
            <input
              type="text"
              value={this.state.title || ""}
              onChange={this.handleInput("title")}
              placeholder="title of recipe"
            />
            <br />
            <input
              type="text"
              onKeyPress={this.handleKeyPress("ingredients")}
              value={this.state.ingredients || ""}
              onChange={this.handleInput("ingredients")}
              placeholder="ingredients"
            />
            Add or delete ingredients
            <p>Hit return to separate ingredients!</p>
            <br />
            <input
              type="text"
              value={this.state.servings || ""}
              onChange={this.handleInput("servings")}
              placeholder="how many servings"
            />
            How many servings?
            <br />
            <input
              type="text"
              value={this.state.picture || ""}
              onChange={this.handleInput("picture")}
              placeholder="Add a picture"
            />
            Upload a new photograph
            <br />
            <input
              type="text"
              value={this.state.name || ""}
              onChange={this.handleInput("name")}
              placeholder="your name"
            />
            Change your name!
            <br />
            <input
              type="text"
              value={this.state.details || ""}
              onChange={this.handleInput("details")}
              placeholder="Add a succinct description"
            />
            Update your blurb
            <br />
            <textarea
              onKeyPress={this.handleKeyPress("instruction")}
              value={this.state.instruction || ""}
              onChange={this.handleInput("instruction")}
              placeholder="Add your instructions here"
            />
            Improve your instructions!
            <br />
            <label>
              Country
              <select
                value={this.state.country || ""}
                onChange={this.handleInput("country")}
              >
                <option value="Italy">Italy</option>
                <option value="France">France</option>
                <option value="India">India</option>
              </select>
            </label>
            <label>
              Difficulty
              <select
                value={this.state.difficulty || ""}
                onChange={this.handleInput("difficulty")}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </label>
            <br />
            <button
              onClick={() => this.props.deleteListing(this.props.listing._id)}
            >
              delete listing
            </button>
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(EditRecipeForm);
