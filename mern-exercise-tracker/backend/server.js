const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  })
const connection = mongoose.connection
connection.once('open', () => console.log('MongoDB connection established'))

const usersRouter = require('./routes/users')
const exercisesRouter = require('./routes/exercises')

app.use('/users', usersRouter)
app.use('/exercises', exercisesRouter)

app.listen(port, () => console.log('server is up'))

