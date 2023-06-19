import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import VerticalDashBoard from './VerticalDashBoard';

const RecipeUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateRecipe, setUpdateRecipe] = useState({
    name: '',
    recipeInfo: {
      level: '',
      prepTime: 0,
      cookTime: 0,
      yield: 0,
      totalTime: 0,
    },
    ingredients: [],
    directions: [],
    description: '',
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/recipes/${id}`)
      .then((res) => {
        console.log(res.data);
        setUpdateRecipe(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateRecipeDetails = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:8000/api/recipes/${id}`, updateRecipe)
      .then((res) => {
        console.log(res.data);
        navigate('/recipes/myrecipes');
        const { name, recipeInfo, ingredients, directions, description } = res.data;
        setUpdateRecipe((prevUpdateRecipe) => ({
          ...prevUpdateRecipe,
          name,
          recipeInfo: {
            ...prevUpdateRecipe.recipeInfo,
            ...recipeInfo,
          },
            ingredients,
            directions,
            description
          
        }));
        
      })
      .catch((err) => console.log(err));
  };

  const isSubmitDisabled =
  !updateRecipe.name ||
  !updateRecipe.recipeInfo.level ||
  !updateRecipe.recipeInfo.prepTime ||
  !updateRecipe.recipeInfo.cookTime ||
  !updateRecipe.recipeInfo.yield ||
  !updateRecipe.recipeInfo.totalTime ||
  updateRecipe.ingredients.length === 0 ||
  updateRecipe.directions.length === 0 ||
  !updateRecipe.description;
  


  return (
    <div style={{ display: 'flex' }}>
      <VerticalDashBoard />
      <div>
        <h1 style={{ textAlign: 'center' }}>Recipe Update</h1>
  
        <form
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onSubmit={updateRecipeDetails}
          encType='multipart/form-data'
        >
          <div className='row justify-content-space-between'>
            <div className='col-md-8'>
            {(updateRecipe.name.length < 3 && updateRecipe.name.length > 1) ?<p>Name must be at least 3 characters</p> : null}
              <input
                style={{
                  border: 'solid 1px #000',
                  borderRadius: '0px',
                  width: '300px',
                }}
                className='form-control'
                type='text'
                name='name'
                placeholder='Name'
                value={updateRecipe.name}
                onChange={(e) => setUpdateRecipe({...updateRecipe, name: e.target.value})
            }
        
              />
  
              <textarea
                className='form-control'
                style={{
                  width: '300px',
                  marginTop: '10px',
                  borderRadius: '0px',
                  border: 'solid 1px #000',
                  padding: '5px',
                }}
                name='ingredients'
                rows={15}
                cols={1}
                placeholder='Ingredients'
                value={updateRecipe.ingredients.join('\n')}
                onChange={(e) =>
                  setUpdateRecipe({
                    ...updateRecipe,
                    ingredients: e.target.value.split('\n'),
                  })
                }
              />
  
              <textarea
                className='form-control'
                style={{
                  width: '300px',
                  marginTop: '10px',
                  borderRadius: '0px',
                  border: 'solid 1px #000',
                  padding: '5px',
                }}
                name='directions'
                rows={15}
                cols={1}
                placeholder='Directions'
                value={updateRecipe.directions.join('\n')}
                onChange={(e) =>
                  setUpdateRecipe({
                    ...updateRecipe,
                    directions: e.target.value.split('\n'),
                  })
                }
              />
            </div>
  
            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input
                style={{border: 'solid 1px #000', borderRadius: '0px', width: '300px',}}
                className='form-control'
                type='text'
                name='recipeInfo.level'
                placeholder='Level (Easy, Medium, Hard)'
                value={updateRecipe.recipeInfo.level}
                onChange={(e) => setUpdateRecipe({...updateRecipe, recipeInfo: {...updateRecipe.recipeInfo, level: e.target.value}})
}
/>

<input
  style={{
    border: 'solid 1px #000',
    borderRadius: '0px',
    width: '300px',
  }}
  className='form-control'
  type='text'
  name='recipeInfo.prepTime'
  placeholder='Prep Time (mins)'
  value={updateRecipe.recipeInfo.prepTime || ''}
  onChange={(e) => setUpdateRecipe({...updateRecipe, recipeInfo: {...updateRecipe.recipeInfo, prepTime: e.target.value}})
}
/>

<input
  style={{
    border: 'solid 1px #000',
    borderRadius: '0px',
    width: '300px',
  }}
  className='form-control'
  type='text'
  name='recipeInfo.cookTime'
  placeholder='Cook Time (mins)'
  value={updateRecipe.recipeInfo.cookTime || ''}
  onChange={(e) => setUpdateRecipe({...updateRecipe, recipeInfo: {...updateRecipe.recipeInfo, cookTime: e.target.value}}) }
/>

  
              <input
                style={{
                  border: 'solid 1px #000',
                  borderRadius: '0px',
                  width: '300px',
                }}
                className='form-control'
                type='text'
                name='yield'
                placeholder='Yield (Serves #)'
                value={updateRecipe.recipeInfo.yield || ''}
                onChange={(e) => setUpdateRecipe({...updateRecipe, recipeInfo: {...updateRecipe.recipeInfo, yield: e.target.value}}) }
              />
  
              <input
                style={{
                  border: 'solid 1px #000',
                  borderRadius: '0px',
                  width: '300px',
                }}
                type='text'
                name='totalTime'
                placeholder='Total Time (mins)'
                value={updateRecipe.recipeInfo.totalTime || ''}
                onChange={(e) => setUpdateRecipe({...updateRecipe, recipeInfo: {...updateRecipe.recipeInfo, totalTime: e.target.value}}) }
              />
  
              <textarea
                style={{
                  width: '300px',
                  marginTop: '10px',
                  border: 'solid 1px #000',
                  padding: '5px',
                }}
                name='description'
                rows={15}
                cols={1}
                placeholder='Description of Recipe'
                value={updateRecipe.description}
                onChange={(e) => setUpdateRecipe({...updateRecipe, description: e.target.value}) }
              />
               <button
                className='new-store'
                type='submit'
                disabled={isSubmitDisabled}
              >
                Update Recipe
                </button>
                {isSubmitDisabled && <p>All fields are required</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  
};

export default RecipeUpdate;
