import React from 'react';
// import { Link } from 'react-router-dom';


const ReviewIndexItem = ({ review }) => {
    return (
        <div>
            <div className="review-index-items">
                <li> 
                    <div className="review-index-item">
                        <div className="review-title">
                            <p>{review.review}</p>
                        </div>
                        <br/>
                        <div className="review-score">
                            <p>{review.score}</p>
                        </div>
                    <br/>
                    </div>
                </li>
            </div>
        </div>
    )
}
export default ReviewIndexItem