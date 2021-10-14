import React from 'react';
import Rating from '../Rating/Rating';

const Review = ({description, title, score}) => {
  return (
    <div className="review-card">
        <div className="review-title">
        <h3>{title}</h3>
      </div>
      <div className="review-description">
        <p>{description}</p>
      </div>
      <div className="review-rating">
        <Rating score={score}/>
      </div>
    </div>
  )
}

export default Review;