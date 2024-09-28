const router = require('express').Router()

const Book = require('../models/Book.model')



// CRUD

router.get('/books',(req,res)=>{

    Book.find()
    .then((allBooks)=>{
        res.json(allBooks)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
})


router.get('/books/:id',(req,res)=>{

    Book.findById(req.params.id)
    .then((foundBook)=>{res.json(foundBook)})
    .catch((err)=>{res.json(err)})
})


// Exercise 1:
//      1. Write the POST endpoint for creating a new book

router.post('/books',(req,res)=>{

    Book.create(req.body)
    .then((createdBook)=>{

        res.json(createdBook)
    })
    .catch((err)=>{
        res.json(err)
    })
})


// Update

router.put('/books/:id',(req,res)=>{

    Book.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((updatedBook)=>{
        res.json(updatedBook)
    })
    .catch((err)=>{
        res.json(err)
    })
})


router.delete('/books/:id',async (req,res)=>{

    try{
        const deletedBook = await Book.findByIdAndDelete(req.params.id)
        res.json(deletedBook)
    }
    catch(err){
        res.json(err)
    }

})





module.exports = router