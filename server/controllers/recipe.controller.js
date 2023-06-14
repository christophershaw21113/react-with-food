const ReactWithFood = require('../models/recipe.model')


module.exports = {
    index: (req, res) => {
        console.log(res)
        res.json({ message: "This works!" })
    },

    createRecipe: (req, res) => {
        ReactWithFood.create(req.body)
            .then(createRecipe => res.json(createRecipe))
            .catch(err => res.json(err))
    },

    getAllRecipes: (req, res) => {
        ReactWithFood.find({})
            .then(allRecipes => res.json(allRecipes))
            .catch(err => res.json(err))
    },

    getOneRecipe: (req, res) => {
        ReactWithFood.findOne({ _id: req.params.id })
            .then(oneRecipe => res.json(oneRecipe))
            .catch(err => res.json(err))
    },

    updateRecipe: (req, res) => {
        ReactWithFood.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(updatedRecipe => {
                res.json(updatedRecipe)
                console.log(updatedRecipe)
            })
            .catch(err => {
                console.log(err)
                res.json(err)
            })

    },

    deleteRecipe: (req, res) => {
        ReactWithFood.deleteOne({ _id: req.params.id })
            .then(deletedRecipe => {
                res.json(deletedRecipe)
                console.log(deletedRecipe)
            })
            .catch(err => {
                console.log(err)
                res.json(err)
            })

    }

    // uploadFileForRecipe: (req, res) => {
    //     const { photo } = req.file.filename
    //     ReactWithFood.create({ photo })
    //         .then((data) => {
    //             console.log(data)
    //             console.log("Uploaded Successfully...")
    //             res.send(data);
    //         })
    //         .catch((err) => console.log(err))
    // },

    // getAllPhotos: async (req, res) => {
    //     try {
    //         const allPhotos = await ReactWithFood.find({ photo: req.body.photo }).sort({ createdAt: "descending" });
    //         console.log(allPhotos);
    //         res.send(allPhotos);
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).send("An error occurred while fetching the photos.");
    //     }
    // }

}