const express = require('express')
const bodyparser= require('body-parser')
const cors = require('cors')
const path = require('path')
const app = express()
const serveStatic = require('serve-static')
const fileUpload = require('express-fileupload');

const port = 3002
const router= require('./src/api/index')

app.use(cors())
app.use(bodyparser.json())
app.use(fileUpload())

console.log(path.join(__dirname, 'assets'));

app.use('/assets', router)
// app.use(serveStatic(path.join(__dirname, 'assets')))

app.listen(port, ()=> console.log( `Assets microservice listening on port ${port}`));

