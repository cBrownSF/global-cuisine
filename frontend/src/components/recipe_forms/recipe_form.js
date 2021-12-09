import React from "react";
import { Link, withRouter } from "react-router-dom";

class CreateRecipeForm extends React.Component {
  constructor(props) {
    super(props)

    const listing = this.props.listing

    this.state = {
      name: '',
      author_id: this.props.currentUser.id,
      ingredients: '',
      instruction: '',
      details: '',
      difficulty: 'Easy',
      servings: '',
      title: '',
      picture: '',
      country: 'Italy'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.clearErrors()
  }
  handleSubmit(e) {
    e.preventDefault();

    debugger;
    this.props.submitForm(this.state)
    .then(res => {
      debugger;
      if (res.type === 'RECEIVE_LISTING_ERRORS') {
        debugger;
      }else{
        debugger;
        this.props.history.push('/')
      }
    }
    )
  }

  handleInput(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  render() {

    if (this.props.listing === undefined) {
      return null;
    }
    return (
      <div>
        {/* <p> <Link to={`/listings/${listing.id}/edit`}>Edit</Link></p> */}
        <form onSubmit={this.handleSubmit}>
          <div>
            <br />
            <input type="text"
              value={this.state.title}
              onChange={this.handleInput('title')}
              placeholder="title of recipe"
            />
            <br />
            <input type="text"
              value={this.state.ingredients}
              onChange={this.handleInput('ingredients')}
              placeholder="ingredients"
            />
            <br />
            <input type="text"
              value={this.state.servings}
              onChange={this.handleInput('servings')}
              placeholder="how many servings"
            />
            <br />
            <input type="text"
              value={this.state.picture}
              onChange={this.handleInput('picture')}
              placeholder="Add a picture"
            />
            <br />
            <input type="text"
              value={this.state.name}
              onChange={this.handleInput('name')}
              placeholder="your name"
            />
            <br />
            <input type="text"
              value={this.state.details}
              onChange={this.handleInput('details')}
              placeholder="Add a succinct description"
            />
            <br />
            <textarea
              value={this.state.instruction}
              onChange={this.handleInput('instruction')}
              placeholder="Add your instructions here"
            />
            <br />
            <label>Country
              <select value={this.state.country} onChange={this.handleInput('country')}>
                <option value="Italy">Italy</option>
                <option value="France">France</option>
                <option value="India">India</option>
              </select>
            </label>
            <label>Difficulty
              <select value={this.state.difficulty} onChange={this.handleInput('difficulty')}>
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