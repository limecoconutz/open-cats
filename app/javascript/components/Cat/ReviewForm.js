import React, {Fragment} from "react";
import styled from "styled-components";
import Rating from '../Rating/Rating';
import './ReviewForm.scss';
import Gray from './Stars/Gray';
import Selected from './Stars/Selected';
import Hover from './Stars/Hover';

const ReviewForm = ({attributes, handleChange, handleSubmit, review, setRating}) => {
  const RatingBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;
  .input-star {
    display: none;
  }
  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml;charset=UTF8,${Gray}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
  }
  .input-star:checked ~ label,
  .input-star:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF8,${Selected}");
  }
  .input-star:not(:checked) ~ label:hover,
  .input-star:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF8,${Hover}");
  }`;

  const ratingOptions = [5,4,3,2,1].map((score, index) => {
    return (
      <Fragment key={index}>
        <input className="input-star"
        type="radio"
        value={score}
        name="rating"
        checked={review.score == score}
        onChange={()=>console.log('selected:', score)}
        id={`rating-${score}`}
        />
        <label onClick={setRating.bind(this, score)}></label>
      </Fragment>
    )
  });

  return(
    <div className="form-wrapper">
      <form>
        <div style={{textAlign: 'center', paddingBottom: '10px'}}>
          Have an experience with {attributes.name}? Share your thoughts
        </div>
        <div className="field">
          <input className="input-form" onChange={handleChange} value={review.title }type="text" name="title" placeholder="Review Title"/>
          <input className="input-form" onChange={handleChange} value={review.description }type="description" name="description" placeholder="Review Description"/>
          <div className="field">
              <div className="rating-container">
              <div className="rating-title-text">Rate this cat</div>
                <RatingBox>
                  {ratingOptions}
                </RatingBox>
              </div>
          </div>
        </div>
        <button type="submit" onClick={handleSubmit}>Submit your review</button>
      </form>
    </div>
  )
}

export default ReviewForm;