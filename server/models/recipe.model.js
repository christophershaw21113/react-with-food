const mongoose = require('mongoose');

// Create a schema
const FoodRecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    recipeInfo: {
        level: {
            type: String,
            required: [true, 'Easy, Medium, or Hard level is required!'],
            enum: ["Easy", "Medium", "Hard"],
        },
        prepTime: {
            type: Number,
            required: true,
            min: [5, 'Must be at least 5 mins to prep the food'],
            enum: [5, 10, 15, 20, 25, 30, 35, 45, 50, 55, 60, 75, 90, 120] // counting in minutes
        },
        cookTime: {
            type: Number,
            required: true,
            min: [5, 'Must be at least 5 mins to cook the food'],
            enum: [5, 10, 15, 20, 25, 30, 35, 45, 50, 55, 60, 75, 90, 120]
        },
        yield: {
            type: Number,
            required: true,
            min: [1, 'Must have at least 1 serving']
        },
        totalTime: {
            type: Number,
            required: true,
            enum: [5, 10, 15, 20, 25, 30, 35, 45, 50, 55, 60, 75, 90, 120] // counting in minutes
        }

    },
    ingredients: {
        type: Array,
        required: true
    },
    directions: {
        type: Array,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
}, { timestamps: true })

module.exports = mongoose.model('FoodRecipe', FoodRecipeSchema);