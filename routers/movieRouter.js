// Add new user
const express = require("express")
const Movie = require('../models/movieModel')
const path = require('path')
const router = express.Router()

// Information
router.get("/movie", async (req, res) => {
  await Movie.find(
    {},
    (err, result) => {  
      if (err) return res.status(500).send(err)
      return res.status(200).send(result)
    }
  )
})

router.post("/movie/shared", async (req, res) => {
  const newMovie = new Movie({
    email: req.body.value.email,
    sharedMovie: req.body.value.sharedMovie
  })
  await newMovie.save(err => {
    if (err) return res.json({error_code:0, err_desc: err})
    console.log(req.query)
    return res.json({status: 200, desc: "Add new movie successfully!"})
  })
})

module.exports = router
