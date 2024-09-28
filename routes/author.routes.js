const router = require('express').Router()




router.get('/authors',(req,res)=>{

    res.json("all Authors")
})








module.exports = router