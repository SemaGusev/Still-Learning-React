//import npm packages
const express = require ('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

const app = express()
const PORT = process.env.PORT  || 8080

//HTTP request logger
app.use(morgan('tiny'))

app.get('/api', (req, res) => {
    const data = {
        username: "somename",
        age: 10
    }
    res.json(data)
})
app.get('/api/name', (req, res) => {
    const data = {
        username: "secondsomename",
        age: 5
    }
    res.json(data)
})

app.listen(PORT, console.log(`Server is starting at ${PORT}`))