const RecipeController = require('../controllers/recipe.controller')


module.exports = (app) => {

    app.get('/api/', RecipeController.index)
    app.get('/api/recipes', RecipeController.getAllRecipes)
    app.get('/api/recipes/:id', RecipeController.getOneRecipe)
    app.post('/api/recipes/add', RecipeController.createRecipe)
    app.patch('/api/recipes/:id', RecipeController.updateRecipe)
    app.delete('/api/recipes/:id', RecipeController.deleteRecipe)

}



