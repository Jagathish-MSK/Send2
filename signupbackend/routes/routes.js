const express = require('express')
const router = express.Router()
const sighnuptpcp = require('../models/signupmodels')

router.post('/signup', (req, res) =>{
    const signupUser = new sighnuptpcp({
        fullName:req.body.fullName,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    signupUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error =>{
        res.json(error)
    })
})

module.exports = router