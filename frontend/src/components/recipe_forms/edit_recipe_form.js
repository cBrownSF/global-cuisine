import React from "react";
import "./edit_form.css"

class EditRecipeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleFile = this.handleFile.bind(this)
    this.servingInput = this.servingInput.bind(this)
    this.letterCount = this.letterCount.bind(this)
  }
  componentDidMount() {
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
      e.preventDefault();
      return;
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


  handleInput(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value })
    }
  }
  servingInput(type) {
    const regex = /^[0-9\b]+$/;

    return e => {
      if (e.currentTarget.value === '' || regex.test(e.currentTarget.value) && e.currentTarget.value.length <= 2 && e.currentTarget.value < 21 && e.currentTarget.value > 0) {
        this.setState({ [type]: e.currentTarget.value })
      }
    }
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }
  letterCount(section, maxChar) {

    let charLeft = (maxChar - section.length)
    return charLeft < 1 ? 'Max characters reached' : `${charLeft} characters remaining`
  }
  
  handleDelete(field) {
    this.setState({
      [field]: true,
    })
    this.props.deleteListing(this.props.listing._id)
  }
 
  handleMaxInput(field, maxCharacter) {
    return (e) => {
      if (e.currentTarget.value.length < maxCharacter) {
        this.setState({
          [field]: e.currentTarget.value,
        });
      }
    }
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
      this.props.deleteListing(this.props.listing._id)
  }
  render() {

    if (!this.props.listing) {
      return null;
    }
    return (
      <div className="edit-recipe-form">
        <form
          onSubmit={this.handleSubmit}
          className="edit-form"
          encType="multipart/form-data"
        >
          <div className="edit-text-recipe">Edit Your Recipe</div>
          <div className="edit-center-recipe">
            <div className="edit-left-right-form">
              <div className="edit-left-form">
                <div className="edit-name-create">
                  <div className="edit-name-text">Name</div>
                  <div>
                    <input
                      type="text"
                      value={this.state.name || ''}
                      onChange={this.handleMaxInput("name", 21)}
                      className="edit-name-input"
                    />
                    <p className="edit-letter-count-name">
                      {this.letterCount(this.state.name || "", 20)}
                    </p>
                  </div>
                </div>
                <div className="edit-title-create">
                  <div className="edit-title-text">Recipe Title</div>
                  <div>
                    <input
                      type="text"
                      value={this.state.title || ''}
                      onChange={this.handleMaxInput("title", 36)}
                      className="edit-title-input"
                    />
                    <p className="edit-letter-count-title">
                      {this.letterCount(this.state.title || "", 35)}
                    </p>
                  </div>
                </div>
                <div className="edit-serving-create">
                  <div className="edit-serving-text">
                    Serving size(up to 20)
                  </div>
                  <div>
                    <input
                      type="text"
                      value={this.state.servings || ""}
                      onChange={this.servingInput("servings")}
                      className="edit-servings-input"
                    />
                  </div>
                </div>
                <div className="edit-country-create">
                  <div className="edit-country-text">Country</div>
                  <div>
                    <select
                      className="edit-country-input"
                      value={this.state.country || ''}
                      onChange={this.handleInput("country")}
                    >
                      <option value="" selected disabled hidden></option>
                      <option value="Italy">Italy</option>
                      <option value="France">France</option>
                      <option value="India">India</option>
                      <option value="Peru">Peru</option>
                      <option value="Ethiopia">Ethiopia</option>
                    </select>
                  </div>
                </div>
                <div className="edit-difficulty-create">
                  <div className="edit-difficulty-text">Difficulty</div>
                  <div>
                    <select
                      className="edit-difficulty-input"
                      value={this.state.difficulty || ''}
                      onChange={this.handleInput("difficulty")}
                    >
                      <option value="" selected disabled hidden></option>
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                  </div>
                </div>
                <div className="edit-description-create">
                  <div className="edit-description-text">Description</div>
                  <div>
                    <textarea
                      value={this.state.details || ''}
                      onChange={this.handleMaxInput("details", 361)}
                      className="edit-description-input"
                    />
                    <p className="edit-letter-count-details">
                      {this.letterCount(this.state.details || "", 360)}
                    </p>
                  </div>
                </div>
                <div className="edit-form-photo">
                  {this.state.photoUrl ? (
                    <img
                      className="edit-upload-photo-create"
                      src={this.state.photoUrl}
                    />
                  ) : (
                    <img
                      className="edit-upload-photo-create"
                      src={this.state.picture}
                    />
                  )}
                  <div className="edit-picture-create">
                    <div className="edit-picture-text">Upload New Picture</div>
                    <div>
                      <input
                        type="file"
                        name="picture"
                        onChange={this.handleFile}
                        className="edit-uploadpic-create"
                      />
                    </div>
                    <div className="recommended-photo-edit">
                      Recommended image size 640 X 400
                    </div>
                  </div>
                </div>
              </div>
              <div className="edit-right-form">
                <div className="edit-ingredients-create">
                  <div className="edit-ingredients-text">Ingredients</div>
                  <div>
                    <textarea
                      value={this.state.ingredients || ''}
                      onChange={this.handleInput("ingredients")}
                      className="edit-ingredients-input"
                    />
                    <p className="edit-letter-count-ingredient">
                      Add a new line after each ingredient
                    </p>
                  </div>
                </div>
                <div className="edit-instruction-create">
                  <div className="edit-instruction-text">Instruction</div>
                  <div>
                    <textarea
                      value={this.state.instruction}
                      onChange={this.handleMaxInput("instruction", 2001)}
                      className="edit-instruction-input"
                    />
                    <p className="edit-letter-count-instruction">{this.letterCount(this.state.instruction || '', 2000)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="edit-submit-recipe-create">
              <button
                className="edit-submit-delete-button"
                onClick={() => this.handleDelete("deleted")}
              >
                Delete
              </button>
              <input
                type="submit"
                value="Update"
                className="edit-submit-delete-button"
              />
            </div>
          </div>
        </form>
        <div className="edit-errors-create">{this.renderErrors()}</div>
      </div>
    );
  }
} 
export default EditRecipeForm;