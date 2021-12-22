import { connect } from 'react-redux';
import { updateReview, deleteReview, getReview, removeReviewErrors} from "../../actions/review_actions";
import ReviewForm from './review_form';
import React from 'react';

class EditReviewForm extends React.Component {
    componentDidMount(){
      this.props.getReview(this.props.match.params.reviewId)
  }
  
    render () {
 
      const { review, formType, submitReview } = this.props;
      if (!review) return null;
      return (
        <ReviewForm
          review={review}
          formType={formType}
          submitReview={submitReview} 
          updateReview={updateReview}
          />
      );
    }
  }

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    formType: 'update'
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    submitForm: id => dispatch(updateReview(id)),
    deleteReview: id => dispatch(deleteReview(id)),
    getReview: id => dispatch(getReview(id)),
    updateReview: id => dispatch(updateReview(id)),
    removeReviewErrors: () => dispatch(removeReviewErrors())
  }
}
export default connect(mapStateToProps, mapDispatchtoProps)(EditReviewForm);