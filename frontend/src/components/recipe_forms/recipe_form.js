import React from "react";
import "./recipe_form.css"
class CreateRecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      author_id: this.props.currentUser.id,
      ingredients: "",
      instruction: "",
      details: "",
      difficulty: "",
      servings: "",
      title: "",
      picture:
        "https://global-cuisine.s3.us-west-1.amazonaws.com/worldflags.jpeg",
      country: "",
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    console.log('hitDidmount')
    this.props.clearErrors();
  }
  handleKeyPress(instruction) {
    return (e) => {
      if (e.key === "Enter") {
        this.setState({
          [instruction]: e.currentTarget.value + "\n",
        });
      }
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state)
      .then(this.props.clearErrors());
  }
  handleInput(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }
  // handleFile(e) {
  //   const file = e.currentTarget.files[0];
  //   const fileReader = new FileReader();
  //   fileReader.onloadend = () => {
  //     this.setState({ photoFile: file, photoURL: fileReader.result });
  //   };
  //   if (file) {
  //     fileReader.readAsDataURL(file);
  //   }
  // }
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
    if (this.props.listing === undefined) {
      return null;
    }
    return (
      <div className="create-recipe-form">
        <form onSubmit={this.handleSubmit}>
          <div className="recipe-page">
            <div className="center-recipe">
              <div className="name-create">
                <div className="name-text">Name</div>
                <div>
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleInput("name")}
                    className="name-input"
                  />
                </div>
              </div>
              <div className="title-create">
                <div className="title-text">Title</div>
                <div>
                  <input
                    type="text"
                    value={this.state.title}
                    onChange={this.handleInput("title")}
                    className="title-input"
                  />
                </div>
              </div>
              <div className="ingredients-create">
                <div className="ingredients-text">Ingredients</div>
                <div>
                  <input
                    type="text"
                    value={this.state.ingredients}
                    onChange={this.handleInput("ingredients")}
                    className="ingredients-input"
                  />
                </div>
              </div>
              <div className="serving-create">
                <div className="serving-text">Serving size</div>
                <div>
                  <input
                    type="text"
                    value={this.state.servings}
                    onChange={this.handleInput("servings")}
                    className="servings-input"
                  />
                </div>
              </div>
              <div className="picture-create">
                <div className="picture-text">Picture</div>
                <div>
                  <input
                    type="text"
                    value={this.state.picture}
                    onChange={this.handleInput("picture")}
                    className="picture-input"
                  />
                </div>
              </div>
              <div className="description-create">
                <div className="description-text">Description</div>
                <div>
                  <input
                    type="text"
                    value={this.state.details}
                    onChange={this.handleInput("details")}
                    className="description-input"
                  />
                </div>
              </div>
              <div className="instruction-create">
                <div className="instruction-text">Instruction</div>
                <div>
                  <textarea
                    onKeyPress={this.handleKeyPress("instruction")}
                    value={this.state.instruction}
                    onChange={this.handleInput("instruction")}
                    className="instruction-input"
                  />
                </div>
              </div>
              <div className="country-create">
                <div className="country-text">Country</div>
                <div>
                  <select
                    className="country-input"
                    value={this.state.country}
                    onChange={this.handleInput("country")}
                  >
                    <option value="" selected disabled hidden></option>
                    <option value="Italy">Italy</option>
                    <option value="France">France</option>
                    <option value="India">India</option>
                  </select>
                </div>
              </div>
              <div className="difficulty-create">
                <div className="difficulty-text">Difficulty</div>
                <div>
                  <select
                    className="difficulty-input"
                    value={this.state.difficulty}
                    onChange={this.handleInput("difficulty")}
                  >
                    <option value="" selected disabled hidden></option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
              </div>
              <div className="submit-recipe">
                <input type="submit" value="Submit" className="submit-input" />
              </div>
            </div>
          </div>
        </form>
        <div className="errors-create">{this.renderErrors()}</div>
      </div>
    );
  }
}

export default CreateRecipeForm
