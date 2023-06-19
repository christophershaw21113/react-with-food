import React, {useState} from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main'
import NewRecipe from './components/NewRecipe';
import Card from './components/Card'
import MyRecipes from './components/MyRecipes';
import RecipeUpdate from './components/RecipeUpdate';



function App() {

  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}  default />
        <Route path='/recipes/add' element={<NewRecipe />} />
        <Route path='/recipes/myrecipes' element={<MyRecipes />}  />
        <Route path='/recipes/myrecipes/:id' element={<RecipeUpdate />}  />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
