const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
  email: String,
  sharedMovie: String,
})

module.exports = mongoose.model('Movie', movieSchema)
