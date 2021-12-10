
import React from 'react';
import { withRouter } from 'react-router';

class ReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.review;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        const listingId = this.props.listing.id
        const review = Object.assign({}, this.state, {
            listingId
        });
        if (this.props.currentUser) {
            this.props.submitReview(review)
            // .then(() => this.props.history.push("/events"));
        }
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    render(){

        if (!this.props.event) return null
        return(
            <div className="Main-Review-Form">
                <h3>Leave a review</h3>
                <form onSubmit={this.handleSubmit}>
                    <br/>
                        <label>Review
                        <textarea
                        value={this.state.review}
                        onChange={this.update('review')}
                        /> 
                        </label>
                    <br/>
                        <label>Score
                        <input 
                        type="number"
                        value={this.state.score}
                        onChange={this.update('rating')}
                        />
                        </label>
                    <br />
                        <button type='submit' value={this.props.formType} className="Create-Review-Button">{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default withRouter(ReviewForm)