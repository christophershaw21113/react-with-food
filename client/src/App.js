import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main'
import NewRecipe from './components/NewRecipe';
import Card from './components/Card'



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/recipes/add' element={<NewRecipe />} />
        <Route path='/card' element={<Card />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
