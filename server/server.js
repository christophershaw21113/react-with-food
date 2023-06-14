const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')


const app = express();
require("dotenv").config()

const PORT = process.env.PORT || 8000;
// Middleware for express to read incoming data from the client's request object

app.use(express.json());
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// Middleware for multer to read file from disk and store it in memory
require("./config/mongoose.config")
require('./routes/recipe.routes')(app);

// Listening to port on express server
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))             
