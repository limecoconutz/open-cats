import React from "react";
import Rating from '../Rating/Rating';
import './ReviewForm.scss';

const ReviewForm = ({attributes, reviews}) => {
  return(
    <div className="form-wrapper">
      <form>
        <div>Have an experience with {attributes.name}? Share your thoughts</div>
        <div className="field">
          <input type="text" name="title" placeholder="Review Title"/>
          <input type="description" name="description" placeholder="Review Description"/>
          <div className="field">
              <div className="rating-container">
                <div className="rating-title-text">Rate This Cat</div>
                {console.log(reviews.length)}
                <Rating score={reviews.length}/>
              </div>
          </div>
        </div>
        <button type="submit">Submit your review</button>
      </form>
    </div>
  )
}

export default ReviewForm;