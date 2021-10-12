import React from 'react';
import Review from './Review';
import Rating from '../Rating/Rating';
import './Review.scss';

const Header = ({attributes, reviews}) => {
  const {name, image_url, avg_score} = attributes;
  console.log(attributes);
  const total = reviews.length;

  let reviewsArr;
  if (total > 0) {
    reviewsArr = reviews.map( (review, index) => {
        return (
          <Review 
            key={index} 
            title={review.attributes.title} 
            description={review.attributes.description} 
            score={review.attributes.score} 
          />
        )
      })
    }
  return(
    <div className="wrapper" >
      <h1 className="cat-title"><i className="fas fa-paw"></i> {name}</h1>
      <section className="cat-card" style={{backgroundImage: `url(${image_url})`}}>
      </section>
      <div className="reviews-wrapper">
        <div className="totalReviews">{total} reviews</div>
        <div className="starRating">
        <Rating score={avg_score}/>
        </div>
      </div>
      <div className="reviews-box">
        <div>{reviewsArr}</div>
      </div>
    </div>
  )
}

export default Header;