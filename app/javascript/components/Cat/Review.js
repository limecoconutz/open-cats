import React from 'react'

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
        {score}
      </div>
    </div>
  )
}

export default Review;