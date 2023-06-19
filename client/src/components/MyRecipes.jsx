import VerticalDashBoard from './VerticalDashBoard'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRipple, MDBListGroup, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import img from '../img/image-coming-soon.jpeg'


const MyRecipes = (props) => {
  const {removeRecipeFromDom} = props;
  const { id } = useParams();
  const [searchInput, setSearchInput] = useState('');
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(null);
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

  const deleteRecipe = (recipeId) => {
    axios.delete(`http://localhost:8000/api/recipes/${recipeId}`)
        .then(res => {
          //Removing the delete recipe from state!
          setRecipes((previousRecipes) =>
        previousRecipes.filter((recipe) => recipe._id !== recipeId)
      );
            removeRecipeFromDom(recipeId);

        })
        .catch(err => console.log(err))
}


  const toggleDescription = (index) => {
    setSelectedRecipeIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const getDescriptionPreview = (recipe, index) => {
    if (index === selectedRecipeIndex) {
      return (
        <div>
          <p>Description: {recipe.description}</p>
          <p>Ingredients: {recipe.ingredients}</p>
          <p>Directions: {recipe.directions}</p>
          <ul></ul>
        </div>
      );
    } else {
      return (
        <div>
          <p>Description: {recipe.description.slice(0, 120)}...</p>
        </div>
      );
    }
  };

  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1;
  });

  const styleCard = {
    card: {
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.3s',
      width: '350px',
      marginBottom: '15px',
      marginTop: '30px',
      marginLeft: '20px',
      marginRight: '20px',

    },
    cardHover: {
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    },
    container: {
      padding: '2px 16px',
      width: '100%',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: '10px'
    },
  };


  return (
    <div style={{ display: 'flex' }}>
      <VerticalDashBoard />
    
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
  <h1 style={{textAlign:'center'}}>My Recipes</h1>
        <MDBRow>
          {filteredRecipes.map((recipe, index) => (
            <MDBCol sm="12" md="6" lg="6" key={index}>
              <MDBCard style={styleCard.card}>
                <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                  <Link to={`/recipes/${id}`}><MDBCardImage src={img} width='100%' alt="Recipe" /></Link>
                </MDBRipple>
                <MDBCardBody style={styleCard.container}>
                  <MDBCardTitle>
                    <b>{recipe.name}</b>
                  </MDBCardTitle>
                  <MDBListGroup style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'space-between' }}>
                    <li>Level: {recipe.recipeInfo.level}</li>
                    <li>Yield(s): {recipe.recipeInfo.yield}</li>
                    <li>Total: {recipe.recipeInfo.totalTime} mins</li>
                  </MDBListGroup>
                  <MDBListGroup style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'space-between' }}>
                    <li>Prep: {recipe.recipeInfo.prepTime} mins</li>
                    <li>Cook: {recipe.recipeInfo.cookTime} mins</li>
                  </MDBListGroup>
                  <MDBCardText>{getDescriptionPreview(recipe, index)}</MDBCardText>
                  {selectedRecipeIndex === index ? (
                    <div style={styleCard.buttonContainer}>
                      <button onClick={() => toggleDescription(index)}>Show Less</button>
                      <button><Link to={`/recipes/myrecipes/${recipe._id}`}>Edit</Link></button>
                      <button onClick={() => deleteRecipe(recipe._id)}>Delete</button>
                    </div>
                  ) : (
                    <div style={{display: 'flex', marginBottom: '10px'}}>
                    <button onClick={() => toggleDescription(index)}>View More</button>
                    </div>
                  )}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </div>
    </div>
  );
}

export default MyRecipes;
