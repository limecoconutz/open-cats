import React from 'react';
import './Rating.scss';

const Rating = ({score}) => {
  const avg = (score/5) *100;
  return (
<span className="rating-wrapper">
      <span className="rating"style={{ width: avg + "%" }}></span>
    </span>
  )
}

export default Rating;