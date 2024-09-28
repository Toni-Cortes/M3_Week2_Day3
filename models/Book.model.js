const mongoose = require('mongoose')

// Schema

const bookSchema = new mongoose.Schema({

    title:{
        type:String
    },
    author:{
        type:String
    },
    pageNumbers:{
        type: Number
    },
    genre:{
        type:String
    }
})


// model

const Book = mongoose.model('Book',bookSchema)


module.exports = Book