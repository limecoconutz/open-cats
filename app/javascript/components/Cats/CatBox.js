import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

const CatBox = ({attributes}) => {
  const {name, image_url, slug} = attributes;
  return(
    <div className="card">
      <div className="cat-logo">
        <img src={image_url} alt={name} width="50"/>
      </div>
      <div className="cat-name">
        {name}
      </div>
      <div className="link-wrapper">
        <Link to={`cats/${slug}`}>View Cat</Link>
      </div>
    </div>
  )
}

export default CatBox;