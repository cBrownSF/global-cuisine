import React from "react";
import { Link, withRouter } from "react-router-dom";

class ListingForm extends React.Component{
  constructor(props){
    super(props)
    debugger;
    this.state = {
      name: '',
      author_id: this.props.currentUser.id,
      ingredients: '',
      instructions: '',
      details: '',
      difficulty: 'Easy',
      servings: '4',
      title: '',
      picture: '333',
      country: 'Italy'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  handleInput(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  render() {
    console.log(this.state.name)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <br />
            <input type="text"
              value={this.state.title}
              onChange={this.handleInput('title')}
            />
            <br />
            <input type="text"
              value={this.state.ingredients}
              onChange={this.handleInput('ingredients')}
            />
            <br />
            <input type="text"
              value={this.state.servings}
              onChange={this.handleInput('servings')}
            />
            <br />
            <input type = "text"
              value={this.state.picture}
              onChange = {this.handleInput('picture')}
            />
            <br />
            <input type="text"
              value= {this.state.name}
              onChange={this.handleInput('name')}
            />
            <br />
            <input type="text"
              value={this.state.details}
              onChange={this.handleInput('details')}
              placeholder="Add a succinct description"
            />
            <br />
            <textarea
              value={this.state.instructions}
              onChange={this.handleInput('instructions')}
              placeholder="Add your instructions here"
            />
            <br />
            <label>
          <select value ={this.state.country} onChange ={this.handleInput('country')}>
              <option value="Italy">Italy</option>
              <option value="France">France</option>
              <option value="India">India</option>
          </select>
              <select value={this.state.difficulty} onChange={this.handleInput('country')}>
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


export default ListingForm;