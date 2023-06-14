import React, { useState, useEffect } from 'react';
import VerticalDashBoard from './VerticalDashBoard';
import Card from './Card'
import axios from 'axios';

const DisplayRecipes = (props) => {
  const [searchInput, setSearchInput] = useState('');
  const [toggleViewMore, setToggleViewMore] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/recipes')
      .then((res) => {
        console.log(res);
        setRecipes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{display:"flex"}}>
        <VerticalDashBoard />
        <Card />
    </div>
  );
};

export default DisplayRecipes;
