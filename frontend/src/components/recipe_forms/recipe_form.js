import React from "react";

class CreateRecipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      ingredients: "",
      instruction: "",
      details: "",
      difficulty: "Easy",
      servings: "",
      title: "",
      country: "Italy",
      photoUrl: null,
      photoFile: null
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }
  componentDidMount() {
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
    formData.append('picture',this.state.photoFile)
    formData.append('name', this.state.name)
    formData.append('ingredients', this.state.ingredients)
    formData.append('details', this.state.details)
    formData.append('difficulty', this.state.difficulty)
    formData.append('servings', this.state.servings)
    formData.append('title', this.state.title)
    formData.append('country', this.state.country)
    formData.append('instruction', this.state.instruction)
    // if (this.state.photoFile) {
    //   formData.append('listing[picture]', this.state.photoFile);
    // }
    this.props.submitForm(formData);
  }

  handleInput(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  render() {
    if (this.props.listing === undefined) {
      return null;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <div>
            <br />
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleInput("title")}
              placeholder="title of recipe"
            />
            <br />
            <input
              type="text"
              value={this.state.ingredients}
              onChange={this.handleInput("ingredients")}
              placeholder="ingredients"
            />
            <br />
            <input
              type="text"
              value={this.state.servings}
              onChange={this.handleInput("servings")}
              placeholder="how many servings"
            />
            <br />
            {/* <input
              type="text"
              value={this.state.picture}
              onChange={this.handleInput("picture")}
              placeholder="Add a picture"
            /> */}
            <br />
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInput("name")}
              placeholder="your name"
            />
            <br />
            <input
              type="text"
              value={this.state.details}
              onChange={this.handleInput("details")}
              placeholder="Add a succinct description"
            />
            <br />
            <textarea
              onKeyPress={this.handleKeyPress("instruction")}
              value={this.state.instruction}
              onChange={this.handleInput("instruction")}
              placeholder="Add your instructions here"
            />
            <br />
            <label>
              Country
              <select
                value={this.state.country}
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
                value={this.state.difficulty}
                onChange={this.handleInput("difficulty")}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </label>
          {this.state.photoUrl ? <img className="upload-photo" height="200px" width="200px" src={this.state.photoUrl} /> : null}

          <label>
            Upload Photo
            <input type="file"
              name= "picture"
              onChange={this.handleFile} />
          </label>
            <br />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}


export default CreateRecipeForm;