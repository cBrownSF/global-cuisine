import React from 'react'
import { Redirect,Link } from 'react-router-dom'

class RecipeShow extends React.Component {

  componentDidMount() {
    this.props.receiveListing(this.props.match.params.listingId);
  }

  componentDidUpdate() {
    if (!this.props.listing) {
      this.props.receiveListing(this.props.match.params.listingId);
    }
  }
  hideButton() {
    if (this.props.currentUser.id !== this.props.listing.host_id) {
      return (
       <p><Link to={`/listings/${this.props.listing.id}/edit`}>Edit</Link></p>
      )
    } else {
      return <p>not a user</p>
    }
  }

  onDelete() {
    if (this.props.currentUser.id !== this.props.listing.host_id) {
      this.props.deleteListing(this.props.listing.id)
    } else {
      return <p>not a user</p>
    }
  }
  // backButton(){
  //   <Redirect to ={`/recipes`}/>
  // }

  render() {
    if (!this.props.listing) {
      return null;
    }
debugger;
    const listing = this.props.listing
    if (this.props.currentUser.id === this.props.listing.author_id){
      debugger;
      return (
  <div>
    <h1>Show page</h1>
      <p><Link to={`/recipes`}>Back to Recipes</Link></p>
      <p><Link to={`/recipes/${this.props.listing._id}/edit`}>Edit</Link></p>
      <ul>
        <li>{listing.name}</li>
        <li>{listing.ingredients}</li>
        <li>{listing.details}</li>
        <li>{listing.country}</li>
        <li>{listing.title}</li>
        <li>{listing.difficulty}</li>
        <li>{listing.instruction}</li>
        <li>{listing.picture}</li>
        </ul>
    </div>
  )
      }else{
        debugger;
        return(
          <div>
          <h1>Show page</h1>
      <p><Link to={`/recipes`}>Back to Recipes</Link></p>
      <p>    </p>
      <ul>
        <li>{listing.name}</li>
        <li>{listing.ingredients}</li>
        <li>{listing.details}</li>
        <li>{listing.country}</li>
        <li>{listing.title}</li>
        <li>{listing.difficulty}</li>
        <li>{listing.instruction}</li>
        <li>{listing.picture}</li>
        </ul>
    </div >
        )
      }
  }
}
   
export default RecipeShow;