const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
  email: String,
  sharedMovieId: String,
  title: String,
  description: String,
})

module.exports = mongoose.model('Movie', movieSchema)
