const express = require('express')
const app = express()

app.use(express.static('public'))

var indexRouter = require('./routes/index.js')

app.use('/', indexRouter)
module.exports = app
