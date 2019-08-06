const express = require('express')
const router = express.Router()

const imageApi = require('./image')

router.use('/image', imageApi)
module.exports = router