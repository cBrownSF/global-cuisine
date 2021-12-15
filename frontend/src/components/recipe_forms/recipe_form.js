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
      picture:
        "https://global-cuisine.s3.us-west-1.amazonaws.com/worldflags.jpeg",
      country: "Italy",
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
      this.setState({ photoFile: file, photoURL: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
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
        <form onSubmit={this.handleSubmit}>
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
            <input
              type="text"
              value={this.state.picture}
              onChange={this.handleInput("picture")}
              placeholder="Add a picture"
            />
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
            <br />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}


export default CreateRecipeForm;