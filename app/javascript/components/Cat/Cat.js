import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import Header from './Header';
import ReviewForm from './ReviewForm';
import './Cat.scss';

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
  }, []);

  return(
    <div>
        {
          loaded &&
          <div className="column-wrapper">
              <div className="column">
                  <Header 
                  attributes={cat.data.attributes}
                  reviews={cat.included}
                  />
              </div>
              <div className="column">
                <ReviewForm attributes={cat.data.attributes}
                />
              </div>
          </div>
      }
    </div>
    )
}

export default Cat;