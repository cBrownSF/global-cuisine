import React from "react";
import "./recipe_form.css"

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.currentUser.username,
      author_id: this.props.currentUser.id,
      ingredients: "",
      instruction: "",
      details: "",
      difficulty: "",
      servings: "",
      title: "",
      country: "",
      photoUrl: null,
      photoFile: null
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.servingInput = this.servingInput.bind(this)
    this.letterCount = this.letterCount.bind(this)
  }
  componentDidMount() {
    this.props.clearErrors();
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
  handleSubmit(e) {
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

    this.props.submitForm(formData)
      .then(this.props.clearErrors());
  }

  handleInput(field,maxCharacter) {
    return (e) =>{
    if (e.currentTarget.value.length < maxCharacter){
      this.setState({
        [field]: e.currentTarget.value,
      });
    }
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
  letterCount(section,maxChar){
    let charLeft =(maxChar - section.length)
    return charLeft<=1 ? 'Max characters reached' : `${charLeft} characters remaining`
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
    if (this.props.listing === undefined) {
      return null;
    }
    return (
    
       <div className="create-recipe-form" encType="multipart/form-data">
        <form onSubmit={this.handleSubmit}>
          <div className="recipe-page">
            <div className ='header'>
              <h1>Add a new recipe</h1>
              </div>
              <div className="name-create">
                <div className="name-text">Your Name</div>

                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleInput("name", 20)}
                  className="name-input"
                />
                <p className="letter-count">{this.letterCount(this.state.name, 20)}</p>
              </div>
              


              <div className="title-create">
                <div className="title-text">Recipe Title</div>
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.handleInput("title", 35)}
                  className="title-input"
                />
                <p className="letter-count">{this.letterCount(this.state.title, 35)}</p>
              </div>
              
              <div className="serving-create">
                <div className="serving-text">Serving Size</div>
                <div>
                  <input
                    type="text"
                    value={this.state.servings}
                    onChange={this.servingInput("servings")}
                    className="servings-input"
                  />
                  <p className="letter-count">Up to 20 Servings</p>
                </div>
              </div>
              <div className="country-create">
                <div className="country-text">Country:</div>
                <div>
                  <select
                    className="country-input"
                    value={this.state.country}
                    onChange={this.handleInput("country", 10)}
                  >
                    <option value="" selected disabled hidden></option>
                    <option value="Italy">Italy</option>
                    <option value="France">France</option>
                    <option value="India">India</option>
                  </select>
                </div>
              </div>
              <div className="difficulty-create">
                <div className="difficulty-text">Difficulty:</div>
                <div>
                  <select
                    className="difficulty-input"
                    value={this.state.difficulty}
                    onChange={this.handleInput("difficulty", 7)}
                  >
                    <option value="" selected disabled hidden></option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
              </div>
              <div className="description-create">
                <div className="description-text">Description</div>
                <div>
                  <textarea
                    value={this.state.details}
                    onChange={this.handleInput("details", 360)}
                    className="description-text-area"
                  />
                  <p className="letter-count">{this.letterCount(this.state.details, 360)}</p>
                </div>
              </div>
            <div className="ingredients-create">
              <div className="ingredients-text">Ingredients</div>
              <div>
                {/* <p>Please put each ingredient and its measurement on its own line</p> */}
                <textarea
                  onKeyPress={this.handleKeyPress("ingredients")}
                  value={this.state.ingredients}
                  onChange={this.handleInput("ingredients", 200)}
                  className="ingredients-text-area"
                />
                  <p className="letter-count">Add a new line for each ingredient</p>
              </div>
            </div>
            
            <div className="instruction-create">
              <div className="instruction-text">Instruction</div>
              <div>
                <textarea
                  onKeyPress={this.handleKeyPress("instruction")}
                  value={this.state.instruction}
                  onChange={this.handleInput("instruction", 1500)}
                  className="instruction-text-area"
                />
                <p className="letter-count">{this.letterCount(this.state.instruction, 1500)}</p>
              </div>
            </div>
              {this.state.photoUrl ? (
                <img className="upload-photo" src={this.state.photoUrl} />
              ) : null}

              <div className="picture-create">
                <div className="picture-text">Upload Picture</div>
                <div>
                  <input type="file" name="picture" onChange={this.handleFile} className="uploadpic-create" />
                </div>
              </div>
              <div className="submit-recipe">
                <input type="submit" value="Submit" className="submit-input" />
              </div>
            </div>
        </form> 
        
        <div className="errors-create">{this.renderErrors()}</div>
      </div>
      
    );
  }
}

export default RecipeForm
