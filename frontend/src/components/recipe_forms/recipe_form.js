import React from "react";

class CreateRecipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.currentUser.username,
      author_id: this.props.currentUser.id,
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
    debugger;
    return (
      <ul>
        {Object.values(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
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
            />Name your recipe
            <br />
            <input
              onKeyPress={this.handleKeyPress("ingredients")}
              type="text"
              value={this.state.ingredients}
              onChange={this.handleInput("ingredients")}
              placeholder="ingredients"
            />Add the ingredients
            <p>Hit return to separate ingredients!</p>

            <br />
            <input
              type="text"
              value={this.state.servings}
              onChange={this.handleInput("servings")}
              // placeholder="how many servings"
            />Serving Size
            <br />
            <input
              type="text"
              value={this.state.picture}
              onChange={this.handleInput("picture")}
              // placeholder="Add a picture"
            />Upload a photo!
            <br />
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInput("name")}
              placeholder="your name"
            />Your Name(Feel free to edit!)
            <br />
            <input
              type="text"
              value={this.state.details}
              onChange={this.handleInput("details")}
              placeholder="Add a succinct description"
            />Add a blurb for your recipe
            <br />
            <textarea
              onKeyPress={this.handleKeyPress("instruction")}
              value={this.state.instruction}
              onChange={this.handleInput("instruction")}
              placeholder="Add your instructions here"
            />Add your instructions!
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
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}


export default CreateRecipeForm;