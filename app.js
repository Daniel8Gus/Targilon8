const express = require('express')
var app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

const cors = require('cors')
app.use(cors())

const customENV = require('custom-env')
customENV.env(process.env.NODE_ENV, './config')
console.log(process.env.CONNECTION_STRING)
console.log(process.env.port)

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTION_STRING ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.static('public'))

const articles = require('./routes/article')
app.use('/articles', articles)

app.listen(process.env.PORT)