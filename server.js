// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => { 
  console.log('connected to mongo: ', process.env.MONGO_URI) 
})

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the Hello World! Books API')
})

// books: 
const booksController = require('./controller/books-controller.js')
app.use('/books', booksController)

// LISTEN
app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
})
   
app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})
