const express = require("express")
const router = express.Router()
const movieRouter = require('./movieRouter')
const userRouter = require('./userRouter')

router.use('/', movieRouter)
router.use('/', userRouter)

module.exports = router
