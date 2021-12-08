import React from 'react'


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
  return (
  
  <div>
    <h1>Show page</h1>
    </div>
  )
  }
}
   
export default RecipeShow;