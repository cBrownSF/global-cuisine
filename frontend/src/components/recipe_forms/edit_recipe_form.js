import React from "react";
import { withRouter } from "react-router-dom";

class EditRecipeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleFile = this.handleFile.bind(this)
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
          picture: listing.listing.data.picture || null,
          country: "Italy",
          editId: listing.listing.data._id,
          photoUrl: null,
          photoFile: null
        })
      });
  }
  componentDidUpdate() {
    if (!this.props.listing) {
      this.props.receiveListing(this.props.match.params.listingId);
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

  handleSubmit(e) {
    debugger;
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
    formData.append('instruction', this.state.instruction)
    this.props.submitForm(formData);
  }
  handleKeyPress(instruction) {

    return e => {
      if (e.key === 'Enter') {
        this.setState({
          [instruction]: e.currentTarget.value + '\n'
        })
      }
    }
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
        <form onSubmit={this.handleSubmit}>
          <div>
            <br />
            <input type="text"
              value={this.state.title || ''}
              onChange={this.handleInput('title')}
              placeholder="title of recipe"
            />
            <br />
            <input type="text"
              value={this.state.ingredients || ''}
              onChange={this.handleInput('ingredients')}
              placeholder="ingredients"
            />
            <br />
            <input type="text"
              value={this.state.servings || ''}
              onChange={this.handleInput('servings')}
              placeholder="how many servings"
            />
            <br />
            <input type="text"
              value={this.state.name || ''}
              onChange={this.handleInput('name')}
              placeholder="your name"
            />
            <br />
            <input type="text"
              value={this.state.details || ''}
              onChange={this.handleInput('details')}
              placeholder="Add a succinct description"
            />
            <br />
            <textarea onKeyPress={this.handleKeyPress('instruction')}
              value={this.state.instruction || ''}
              onChange={this.handleInput('instruction')}
              placeholder="Add your instructions here"
            />
            <br />
            <label>Country
              <select value={this.state.country || ''} onChange={this.handleInput('country')}>
                <option value="Italy">Italy</option>
                <option value="France">France</option>
                <option value="India">India</option>
              </select>
            </label>
            <label>Difficulty
              <select value={this.state.difficulty || ''} onChange={this.handleInput('difficulty')}>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </label>
            {this.state.picture ? <img className="upload-photo" height="200px" width="200px" src={this.state.picture} /> : null}

            <label>
              Upload Photo
            <input type="file"
              name="picture"
              onChange={this.handleFile} />
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


export default withRouter(EditRecipeForm);