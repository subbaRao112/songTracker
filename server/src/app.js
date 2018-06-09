const express = require('express')
const bodyParser = require('body-parser')
const cors =require('cors')
const morgan = require('morgan')
const {sequelize} =require('sequelize')

let app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

app.post('/register', (req,res) => {
    res.send({
        message:`hello how are you ${req.body.email}`
    })
})

app.listen(process.env.PORT || 8081)



