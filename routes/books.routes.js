const router = require('express').Router()

const Book = require('../models/Book.model')




router.get('/books',(req,res)=>{

    Book.find()
    .then((allBooks)=>{
        res.json(allBooks)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
})


// Exercise 1:

//      1. Write the POST endpoint for creating a new book








module.exports = router