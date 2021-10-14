import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

      const handleChange = e => {
        e.preventDefault();
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}));
      }
      
      const handleSubmit = e => {
        e.preventDefault();
        const cat_id = cat.data.id;
        axios.post('/api/v1/reviews', { ...review, cat_id })
          .then( (res) => {
          const included = [ ...cat.included, res.data.data ]
          setCat({ ...cat, included })
          setReview({title:'', description:'', score: 0});
        })
        .catch( res => console.log(res))
      }

      const setRating = (score, e) => {
        e.preventDefault();
        setReview({...review, score});
      }

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
            <div className="link-btn-home"><Link to={`/`}>Back</Link></div>
              </div>
              <div className="column">
                <ReviewForm 
                attributes={cat.data.attributes}
                reviews={cat.included}
                review={review}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                setRating={setRating}
                />
              </div>
          </div>
      }
    </div>
    )
}

export default Cat;