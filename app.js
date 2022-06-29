// Call in installed dependencies
const express = require('express')
const mongoose = require('mongoose')
// set up express app
const app = express()
// set up port number
const port = process.env.PORT || 8000
const bodyParser= require('body-parser')
const dotenv = require('dotenv').config()
const routes = require('./routers')
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASSWORD
const url = `mongodb+srv://${dbUser}:${dbPass}@cluster0.0ovozff.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
  // Test API
  app.listen(port, (request, respond) => {
    console.log(`Our server is live on ${port}. Yay!`)
  })
  // Add headers to pass CORS
  app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*')
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true)
    // Pass to next layer of middleware
    next()
  })
  // Generate request data
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  // All routes
  app.use("/", routes)

})
