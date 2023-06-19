import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import VerticalDashBoard from '../components/VerticalDashBoard';

const NewRecipe = () => {
  const navigateHome = useNavigate()
  const [addRecipe, setAddRecipe] = useState({
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

 const [isFormIncomplete, setIsFormIncomplete] = useState(false)
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit works!');

// Check for form completion
if (
  !addRecipe.name ||
  !addRecipe.recipeInfo.level ||
  !addRecipe.recipeInfo.prepTime ||
  !addRecipe.recipeInfo.cookTime ||
  !addRecipe.recipeInfo.yield ||
  !addRecipe.recipeInfo.totalTime ||
  addRecipe.ingredients.length === 0 ||
  addRecipe.directions.length === 0 ||
  !addRecipe.description
) {
  setIsFormIncomplete(true);
  return;
}



    axios
      .post('http://localhost:8000/api/recipes/add/', addRecipe) // Send addRecipe directly as the request payload
      .then((res) => {
        console.log(res.data);
        navigateHome('/')
      
        setAddRecipe({
            ...addRecipe,
          name: res.data.name,
          recipeInfo: {
            level: res.data.recipeInfo.level,
            prepTime: res.data.recipeInfo.prepTime,
            cookTime: res.data.recipeInfo.cookTime,
            yield: res.data.recipeInfo.yield,
            totalTime: res.data.recipeInfo.totalTime,
          },
          ingredients: res.data.ingredients,
          directions: res.data.directions,
          description: res.data.description
          
        });
      })
      .catch((err) => {
        console.log(err)
    
       
      })
      ;
  };

  return (
    <div  style={{ display: 'flex'}}>
      <VerticalDashBoard />
    <div>
     <h1 style={{textAlign: 'center'}}>New Recipe</h1>
  
      <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} onSubmit={handleSubmit} encType='multipart/form-data'>
      <div className='row justify-content-space-between'>
      <div className='col-md-8'>
      {(addRecipe.name.length < 3 && addRecipe.name.length > 1) ?<p>Name must be at least 3 characters</p> : null}
            <input style={{border: 'solid 1px #000', borderRadius: '0px',  width: '300px',}}
              className='form-control'
              type='text'
              name='name'
              placeholder='Name'
              value={addRecipe.name}
              onChange={(e) => setAddRecipe({ ...addRecipe, name: e.target.value })}/>
              
              
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
              value={addRecipe.ingredients.join('\n')}
              onChange={(e) =>
                setAddRecipe({
                  ...addRecipe,
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
              value={addRecipe.directions.join('\n')}
              onChange={(e) =>
                setAddRecipe({
                  ...addRecipe,
                  directions: e.target.value.split('\n'),
                })
              }
            />
          </div>

          <div style={{display: 'flex', flexDirection: 'column'}}>
            <input style={{border: 'solid 1px #000',  borderRadius: '0px',  width: '300px',}}
              className='form-control'
              type='text'
              name='level'
              placeholder='Level (Easy, Medium, Hard)'
              value={addRecipe.recipeInfo.level}
              onChange={(e) =>
                setAddRecipe({
                  ...addRecipe,
                  recipeInfo: {
                    ...addRecipe.recipeInfo,
                    level: e.target.value,
                  },
                })
              }
            />

            <input style={{border: 'solid 1px #000',  borderRadius: '0px', width: '300px',}}
              className='form-control'
              type='text'
              name='preptime'
              placeholder='Prep Time (mins)'
              value={addRecipe.recipeInfo.prepTime || ''}
              onChange={(e) =>
                setAddRecipe({
                  ...addRecipe,
                  recipeInfo: {
                    ...addRecipe.recipeInfo,
                    prepTime: e.target.value,
                  },
                })
              }
            />


             <input style={{border: 'solid 1px #000',  borderRadius: '0px', width: '300px',}}
               className='form-control'
              type='text'
              name='cooktime'
              placeholder='Cook Time (mins)'
              value={addRecipe.recipeInfo.cookTime || ''}
              onChange={(e) =>
                setAddRecipe({
                  ...addRecipe,
                  recipeInfo: {
                    ...addRecipe.recipeInfo,
                    cookTime: e.target.value,
                  },
                })
              }
            />
            <input style={{border: 'solid 1px #000',  borderRadius: '0px',width: '300px',}}
              className='form-control'
              type='text'
              name='yield'
              placeholder='Yield (Serves #)'
              value={addRecipe.recipeInfo.yield || ''}
              onChange={(e) =>
                setAddRecipe({
                  ...addRecipe,
                  recipeInfo: {
                    ...addRecipe.recipeInfo,
                    yield: e.target.value,
                  },
                })
              }
            />
               <input style={{border: 'solid 1px #000',  borderRadius: '0px', width: '300px',}}
              type='text'
              name='totalTime'
              placeholder='Total Time (mins)'
              value={addRecipe.recipeInfo.totalTime || ''}
              onChange={(e) =>
                setAddRecipe({
                  ...addRecipe,
                  recipeInfo: {
                    ...addRecipe.recipeInfo,
                    totalTime: e.target.value,
                  },
                })
              }
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
              value={addRecipe.description}
              onChange={(e) =>
                setAddRecipe({ ...addRecipe, description: e.target.value })
              }
            />
          <button className='new-store' type='submit'>Add New Recipe</button>
          {isFormIncomplete && <p>All fields are required</p>}
          </div>
        </div>
      </form>
   </div>
    </div>

  );
};

export default NewRecipe;
