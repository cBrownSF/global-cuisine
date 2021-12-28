import React from "react";
import { withRouter } from "react-router-dom";
import "./edit_form.css"

class EditRecipeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }
  componentDidMount() {
    debugger;
    this.props.receiveListing(this.props.match.params.listingId)
      .then(listing => {
        return this.setState({
          name: listing.listing.data.name,
          ingredients: listing.listing.data.ingredients,
          instruction: listing.listing.data.instruction,
          details: listing.listing.data.details,
          difficulty: listing.listing.data.difficulty,
          servings: listing.listing.data.servings,
          title: listing.listing.data.title,
          picture: listing.listing.data.picture,
          country: listing.listing.data.country,
          editId: listing.listing.data._id,
          deleted: false,
          photoUrl: null || '',
          photoFile: listing.listing.data.picture || ''
        })
      })
    this.props.clearErrors()
  }  
  componentDidUpdate() {
    if (!this.props.listing) {
  
      this.props.receiveListing(this.props.match.params.listingId);
    }
  }

  handleSubmit(e) {
    if (this.state.deleted === true) {
      debugger;
      e.preventDefault();
      return 'hello'
    }
    e.preventDefault();
    const formData = new FormData();
    formData.append('picture', this.state.photoFile)
    formData.append('name', this.state.name)
    formData.append('ingredients', this.state.ingredients)
    formData.append('details', this.state.details)
    formData.append('difficulty', this.state.difficulty)
    formData.append('servings', this.state.servings)
    formData.append('title', this.state.title)
    formData.append('country', this.state.country)
    formData.append('editId',this.state.editId)
    formData.append('instruction', this.state.instruction)
    this.props.submitForm(formData)
      .then(this.props.clearErrors())
      ;
  }

  handleFile(e) {
    debugger;
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleKeyPress(field) {    
    return e => {
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
  handleDelete(field) {
    this.setState({
      [field]: true,
    })
    this.props.deleteListing(this.props.listing._id)
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
  handleDelete(field){
      this.setState({
        [field]: true,
      })
      debugger;
      this.props.deleteListing(this.props.listing._id)
  }
  render() {

    if (!this.props.listing) {
      return null;
    }
    return (
      <div className="edit-recipe-form">
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <div className="edit-recipe-page">
            <div className="edit-center-recipe">
              <h1 id="title">Edit recipe</h1>
              <div className="title-edit">
                <div>Title</div>
                <div className="title-edit-text">
                  <input
                    type="text"
                    value={this.state.title || ""}
                    onChange={this.handleInput("title")}
                    className="title-edit-input"
                  />
                </div>
              </div>
              <div className="ingredients-edit">
                <div>Ingredients</div>
                <div className="ingredients-edit-text">
                  <textarea
                    type="text"
                    onKeyPress={this.handleKeyPress("ingredients")}
                    value={this.state.ingredients || ""}
                    onChange={this.handleInput("ingredients")}
                    className="ingredients-edit-input"
                  />
                </div>
              </div>
              <div className="servings-edit">
                <div>Serving size</div>
                <div className="servings-edit-text">
                  <input
                    type="text"
                    value={this.state.servings || ""}
                    onChange={this.handleInput("servings")}
                    className="servings-edit-input"
                  />
                </div>
              </div>
              {/* <div className="picture-edit">
                <div>Picture</div>
                <div classname="picture-edit-text">
                  <input
                    type="text"
                    value={this.state.picture || ""}
                    onChange={this.handleInput("picture")}
                    className="picture-edit-input"
                  />
                </div>
              </div> */}
              <div className="name-edit">
                <div>Name</div>
                <div className="name-edit-text">
                  <input
                    type="text"
                    value={this.state.name || ""}
                    onChange={this.handleInput("name")}
                    className="name-edit-input"
                  />
                </div>
              </div>
              <div className="details-edit">
                <div>Details</div>
                <div className="details-edit-text">
                  <input
                    type="text"
                    value={this.state.details || ""}
                    onChange={this.handleInput("details")}
                    className="details-edit-input"
                  />
                </div>
              </div>
              <div className="instruction-edit">
                <div>Instruction</div>
                <div className="instruction-edit-text">
                  <textarea
                    onKeyPress={this.handleKeyPress("instruction")}
                    value={this.state.instruction || ""}
                    onChange={this.handleInput("instruction")}
                    className="instruction-edit-input"
                  />
                </div>
              </div>
              <div className="country-edit">
                <div>Country</div>
                <div className="country-edit-text">
                  <select
                    value={this.state.country || ""}
                    onChange={this.handleInput("country")}
                    className="country-input-edit"
                  >
                    <option value="Italy">Italy</option>
                    <option value="France">France</option>
                    <option value="India">India</option>
                  </select>
                </div>
              </div>
              <div className="difficult-edit">
                <div>Difficulty</div>
                <div className="difficulty-edit-text">
                  <select
                    value={this.state.difficulty || ""}
                    onChange={this.handleInput("difficulty")}
                    className="difficulty-input-edit"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
              </div>
              {this.state.photoUrl ? <img className="upload-photo" height="200px" width="200px" src={this.state.photoUrl} /> : <img className="upload-photo" height="200px" width="200px" src={this.state.picture} />}

              <label>
                Upload Photo
                <input type="file"
                  name="picture"
                  onChange={this.handleFile} />
              </label>
              <br />
              <div className="edit-delete">
                <button
                  className="delete-button-recipe"
                  onClick={() =>
                    this.handleDelete('deleted')
                  }
                >
                  Delete
                </button>
                <div>or</div>
                <input type="submit" value="Submit" className="submit-button-recipe" />
              </div>
              {this.renderErrors()}
            </div>
          </div>
        </form>
      </div>
    );
  }
} 
export default EditRecipeForm;