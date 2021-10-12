import React from 'react';
import Rating from '../Rating/Rating';

const Review = ({description, title, score}) => {
  return (
    <div className="review-card">
        <div className="review-title">
        {title}
      </div>
      <div className="review-description">
        {description}
      </div>
      <div className="review-rating">
        <Rating score={score}/>
      </div>
    </div>
  )
}

export default Review;