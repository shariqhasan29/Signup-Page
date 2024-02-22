const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const router = require('./Router/User')
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/athentication')

app.use(express.json())
app.use(cors())

app.use('/auth', router)

app.listen(process.env.Port, ()=> console.log('port 6969 is working fine'))