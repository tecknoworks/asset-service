const express = require('express')
const bodyparser= require('body-parser')
const cors = require('cors')
const path = require('path')
const serveStatic = require('serve-static')
const fileUpload = require('express-fileupload');
const logger = require('morgan');

const app = express()

const port = 3002
const router= require('./api/index')

app.use(cors())
app.use(bodyparser.json())
app.use(logger('dev'));
app.use(fileUpload())

app.use('/assets', router)

app.listen(port, ()=> console.log( `Assets microservice listening on port ${port}`));