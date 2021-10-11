import React, {useState, useEffect} from 'react';
import axios from 'axios';

import CatBox from './CatBox';
import './Cats.scss';

const Cats = () => {
  const [cats, setCats] = useState([]);
  useEffect( async() => {
    const catsArr = await axios.get('api/v1/cats.json');
    setCats(catsArr.data.data);
  }, [])

  const grid = cats.map((cat, index) => {
  return (<CatBox key={index} attributes={cat.attributes}/>)
})

  return(
      <div className="home">
        <div className="header">
          <h1>OpenCats</h1>
          <p className="subheader">Honest, unbiased cat reviews. Share your experience.</p>
        </div>
        <div className="grid">
          <ul>
            {grid}
          </ul>
        </div>
    </div>
  )
}

export default Cats