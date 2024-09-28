const router = require('express').Router()

const Author = require('../models/Author.model')


router.post('/authors',(req,res)=>{

    Author.create(req.body)
    .then((createdAuthor)=>{res.json(createdAuthor)})
    .catch((err)=>{res.json(err)})
})


router.get('/authors',(req,res)=>{

    Author.find()
    .populate('books')
    .then((allAuthors)=>{res.json(allAuthors)})
    .catch((err)=>{res.json(err)})
})










module.exports = router