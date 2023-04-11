// require mongoose: 
const mongoose = require('mongoose')
const { Schema } = mongoose 

// schema:
const booksSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})

// model and export: 
const Books = mongoose.model('Books', booksSchema)
module.exports = Books
