// Add new user
const express = require("express")
const User = require('../models/userModel')
const path = require('path')
const router = express.Router()

// Information
router.post("/userData", async (req, res) => {
  await User.find(
    {
      email: req.body.value.email,
      password: req.body.value.password
    },
    (err, result) => {  
      if (err) return res.status(500).send(err)
      return res.status(200).send(result)
    }
  )
})

router.post("/userData/register", async (req, res) => {
  const newUser = new User({
    email: req.body.value.email,
    password: req.body.value.password
  })
  await newUser.save(err => {
    if (err) return res.json({error_code:0, err_desc: err})
    console.log(req.query)
    return res.json({
      status: 200,
      data: {
        email: req.body.value.email
      },
      desc: "Add new user successfully!"
    })
  })
})

module.exports = router
