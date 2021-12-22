import React from "react";
import { withRouter } from "react-router-dom";
import "./edit_form.css"

class EditRecipeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state ={};
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  componentDidMount() {
    debugger;
    this.props.receiveListing(this.props.match.params.listingId)
    .then(listing=>{
     return this.setState({
       name: listing.listing.data.name,
       ingredients: listing.listing.data.ingredients,
       instruction: listing.listing.data.instruction,
       details: listing.listing.data.details,
       difficulty: listing.listing.data.difficulty,
       servings: listing.listing.data.servings,
       title: listing.listing.data.title,
       picture: "https://global-cuisine.s3.us-west-1.amazonaws.com/worldflags.jpeg",
       country: listing.listing.data.country,
       editId: listing.listing.data._id
      })
    })
    this.props.clearErrors()
  }  
  componentDidUpdate() {
    if (!this.props.listing) {
      console.log('hitting update')
      this.props.receiveListing(this.props.match.params.listingId);
    }
  } 
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state)
      .then(this.props.clearErrors())
    ;
  }
  handleKeyPress(field) {    return e => {
      if (e.key === 'Enter') {
        this.setState({
          [field]: e.currentTarget.value + '\n'
        })
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
 
    if (!this.props.listing) {
      return null;
    }
    return (      
    <div className="edit-recipe-form">
        <form onSubmit={this.handleSubmit}>
          <div className="edit-recipe-page">
            <div className="edit-center-recipe">
            <h1 id="title">Edit your recipe</h1>
            <br />
            <div className="title-edit">
              <div className="title-edit-text">
            <input type="text"
              value={this.state.title || ''}
              onChange={this.handleInput('title')}
              placeholder="title of recipe"
              className="title-edit-input"
            />
            </div>
            </div>
            <br />
            <div className="ingredients-edit">
              <div className="ingredients-edit-text">
            <input type="text" onKeyPress={this.handleKeyPress('ingredients')}
              value={this.state.ingredients || ''}
              onChange={this.handleInput('ingredients')}
              placeholder="ingredients"
              className="ingredients-edit-input"
            />Add or delete ingredients
            <p>Hit return to separate ingredients!</p>
            </div>
            </div>
            <br />
            <div classname="servings-edit">
              <div classname="servings-edit-text">
            <input type="text"
              value={this.state.servings || ''}
              onChange={this.handleInput('servings')}
              placeholder="how many servings"
              className="servings-edit-input"
            />How many servings?
            </div>
            </div>
            <br />
              <div classname="picture-edit">
                <div classname="picture-edit-text">
            <input type="text"
              value={this.state.picture ||''}
              onChange={this.handleInput('picture')}
              placeholder="Add a picture"
              className="picture-edit-input"
            />Upload a new photograph
            </div>
            </div>
            <br />
              <div className="name-edit">
                <div className="name-edit-text">
            <input type="text"
              value={this.state.name || ''}
              onChange={this.handleInput('name')}
              placeholder="your name"
              className="name-edit-input"
            />Change your name!
            </div>
              </div>
            <br />
            <div className="details-edit">
              <div className="details-edit-text">
            <input type="text"
              value={this.state.details || ''}
              onChange={this.handleInput('details')}
              placeholder="Add a succinct description"
              className="details-edit-input"
            />Update your blurb
            </div>
            </div>
            <br />
            <div className="instruction-edit">
              <div className="instruction-edit-text">
            <textarea onKeyPress={this.handleKeyPress('instruction')}
              value={this.state.instruction || ''}
              onChange={this.handleInput('instruction')}
              placeholder="Add your instructions here"
              className="instruction-edit-input"
            />Improve your instructions!
            </div>
            </div>
            <br />
            <div className="country-edit">
              <div className="country-edit-text">
            <label>Country
              <select value={this.state.country || ''} onChange={this.handleInput('country')}>
                <option value="Italy">Italy</option>
                <option value="France">France</option>
                <option value="India">India</option>
              </select>
            </label>
            </div>
            </div>
            <div className="difficult-edit">
              <div className="difficulty-edit-text">
            <label>Difficulty
              <select value={this.state.difficulty || ''} onChange={this.handleInput('difficulty')}>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </label>
            </div>
            </div>
            <br />
            <button
              onClick={() => this.props.deleteListing(this.props.listing._id)}
            >
              delete listing
            </button>
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
          </div>
        </form>
      </div>
    );
  }
}export default withRouter(EditRecipeForm);
