const express = require('express')
const router = express.Router()
const serveStatic = require('serve-static')
const path = require('path')

const ImageController = require('../controllers/index').ImageController

router.use(serveStatic(path.join(__dirname, '../../assets/images')))
router.post('/upload', ImageController.uploadImage)
router.delete('/delete', ImageController.deleteImage)

module.exports =router