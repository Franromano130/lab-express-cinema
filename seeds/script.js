const Movie = require("../models/Movie.model")

const mongoose = require("mongoose")
require("../db/index.js")


const allMovies = require("./movies.seed")

Movie.insertMany(allMovies)
.then(() => {
    console.log("Peliculas añadidas exitosamente");
    mongoose.connection.close()
})
.catch((error) => {
    console.log(error)
});