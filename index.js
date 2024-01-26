const express = require('express')
const cors = require('cors')
const birthdayRoute = require('./routes/birthdayRoute.js')
const { errorHandler } = require('./errors/errorHandler.js')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use('/api/birthday', birthdayRoute)

app.use(errorHandler)

app.listen(process.env.PORT || port, () => {
  console.log(`Horoscope app listening on port ${port}`)
})
