import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import Header from './Header';
import Review from './Review';
import ReviewForm from './ReviewForm';

const Cat = (props) => {
  const [cat, setCat] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);

    useEffect(() => {
     const slug = props.match.params.slug;
     const url = `/api/v1/cats/${slug}`;
      axios.get(url)
        .then(res => {
          setCat(res.data);
          setLoaded(true);
        })
        .catch(res => console.log(res));
     // const currentCat = await axios.get(url);
     // console.log(currentCat.data);
     // setCat(currentCat.data);
     // setLoaded(true);
  }, []);

  // let reviews;
  // if (cat.data.included.length > 0) {
  //   reviews = cat.included.map( (review, index) => {
  //     return (
  //       <Review 
  //         key={index} 
  //         title={review.attributes.title} 
  //         description={review.attributes.description} 
  //         score={review.attributes.score} 
  //       />
  //     )
  //   })
  // }

  return(
    <div>
        {
          loaded &&
          <Fragment>
          <div className="column">
              <Header 
              attributes={cat.data.attributes}
              reviews={cat.included}
              />
            <div className="reviews">
              [reviews will go here]
            </div>
          </div>
          <div className="column">
            <ReviewForm 
            />
          </div>
          </Fragment>
      }
    </div>
    )
}

export default Cat;