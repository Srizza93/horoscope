const express = require('express')
const cors = require('cors')
const birthdayRoute = require('./src/routes/birthdayRoute.js')
const { errorHandler } = require('./src/errors/errorHandler.js')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/birthday', birthdayRoute)

app.use(errorHandler)

module.exports = app
