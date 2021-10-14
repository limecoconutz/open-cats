import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

const CatBox = ({attributes}) => {
  const {name, image_url, slug, avg_score} = attributes;
  return(
    <div className="card" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),  url(${image_url})`}}>
        <div className="cat-details">
              <div className="cat-name">
                {name}
              </div>
              <Rating score={avg_score} />
              <div className="link-wrapper">
                <Link to={`cats/${slug}`}>View Cat</Link>
              </div>
        </div>
    </div>
  )
}

export default CatBox;