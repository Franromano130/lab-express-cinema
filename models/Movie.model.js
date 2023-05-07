const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    descriotion: String,
    showtimes: Number,
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie;