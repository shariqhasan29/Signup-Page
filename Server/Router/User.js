const express = require('express')
const router = express.Router()
const Schema = require('../Model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/signup', async(req, res)=>{

    const {username, email, password} = req.body
    const user = await Schema.findOne({email})
    if(user){
        return res.json({message: 'user already exists'})
    }

    const hashpassword = await bcrypt.hash(password, 7)

    const newUser = new Schema({
        username,
        email,
        password: hashpassword
    })

    await newUser.save()
    return res.json({status: true, message:'user saved sucessfully'})


})

router.post('/login', async(req, res)=>{
    const {email, password} = req.body
    const user = await Schema.findOne({email})
    if(!user){
        return res.json({message: 'user is not registered'})
    }

    const validPassword = await bcrypt.compare(password, user.password)
    if(!validPassword){
        return res.json({message: "incorrect password"})
    }

    const token = jwt.sign({username: user})
})

module.exports = router