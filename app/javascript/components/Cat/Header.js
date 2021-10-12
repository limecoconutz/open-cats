import React from 'react';
import Review from './Review';

const Header = ({attributes, reviews}) => {
  const {name, image_url, avg_score} = attributes;
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
      <h1 className="cat-title">{name}</h1>
      <section className="cat-card" style={{backgroundImage: `url(${image_url})`}}>
      </section>
      <div>
        <div className="totalReviews">{total} reviews</div>
        <div className="starRating"></div>
        <div className="totalOutOf">{avg_score} out of 5</div>
      </div>
      <div className="reviews-box">
        <div>{reviewsArr}</div>
      </div>
    </div>
  )
}

export default Header;