import React from "react";
import { Link, withRouter } from "react-router-dom";
import { hashHistory } from "react-router"
class ListingForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: this.props.currentUser,
      ingredients: '',
      instructions: '',
      details: '',
      difficulty: '',
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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <br />
            <input type = "file"
              //picture
            />
            <input type="text"
              value={`By: ${this.state.name}`}
              onChange={this.handleInput('name')}
            />
            <input type="text"
              value=''
              onChange={this.handleInput('details')}
              placeholder="Add a succinct description"
            />
            <input type="text"
              value={this.state.title}
              onChange={this.handleInput('title')}
            />

            <input type="textarea"
              value={this.state.instructions}
              onChange={this.handleInput('instructions')}
              placeholder="Add your instructions here"
            />
            <br />
            <label>
          <select value ={this.state.country} onChange ={props.handleInput('country')}>
              <option value="Italy">3 months in advance</option>
              <option value="France">6 months in advance</option>
              <option value="India">9 months in advance</option>
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


export default ListingForm