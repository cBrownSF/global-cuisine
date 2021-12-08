import React from 'react'
import { Link } from 'react-router-dom'

class RecipeShow extends React.Component {

  componentDidMount() {
    this.props.receiveListing(this.props.match.params.listingId);
  }

  componentDidUpdate() {
    if (!this.props.listing) {
      this.props.receiveListing(this.props.match.params.listingId);
    }
  }

  onDelete() {
    if (this.props.currentUser.id === this.props.listing.host_id) {
      this.props.deleteListing(this.props.listing.id)
    } else {
      return ''
    }
  }


  render() {
    if (!this.props.listing) {
   
      return null;
    }
    debugger;
  return (
  
  <div>
    <h1>Show page</h1>
      <p><Link to={`/listings/${this.props.listing._id}/edit`}>Edit</Link></p>
    
    </div>
  )
  }
}
   
export default RecipeShow;