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

router.post("/register", function (req, res) {
  console.log('req.body', req.body)
  var email = req.body.value.email
  console.log('email', email)
  var password = req.body.value.password
  console.log('password', password)
  User.register(new User({ email: email }),
          password, function (err, user) {
      if (err) {
          console.log(err)
          return res.render("register")
      }

      passport.authenticate("local")(
          req, res, function () {
          res.render("secret")
      })
  })
})

router.post("/user", async (req, res) => {
  let checkList = await User.find({})
  if (checkList && checkList.length > 0) {
    await User.findOneAndUpdate(
      {},
      {
        email: req.body.value.email,
        password: req.body.value.password,
        sharedList: ['helllo']
      },
      null,
      err => {  
        if (err) return res.status(500).send(err)
        return res.status(200).send('Edit information success!')
      }
    )
  } else {
    const newUser = new User({
      email: req.body.value.email,
      password: req.body.value.password
    })
    await newUser.save(err => {
      if (err) return res.json({error_code:0, err_desc: err})
      console.log(req.query)
      return res.json({error_code:0, err_desc:"Add information successfully!"})
    })
  }
})

// router.post("/user", async (req, res) => {
//   let checkList = await User.find({})
//   if (checkList && checkList.length > 0) {
//     await User.findOneAndUpdate(
//       {},
//       {
//         email: req.body.value.email,
//         password: req.body.value.password,
//         sharedList: ['helllo']
//       },
//       null,
//       err => {  
//         if (err) return res.status(500).send(err)
//         return res.status(200).send('Edit information success!')
//       }
//     )
//   } else {
//     const newUser = new User({
//       email: req.body.value.email,
//       password: req.body.value.password
//     })
//     await newUser.save(err => {
//       if (err) return res.json({error_code:0, err_desc: err})
//       console.log(req.query)
//       return res.json({error_code:0, err_desc:"Add information successfully!"})
//     })
//   }
// })

module.exports = router
