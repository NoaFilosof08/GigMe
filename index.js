const express = require('express')
const mongoose = require('mongoose')
const router = require('./config/router')
const logger = require('./lib/logger')
//! Won't need below till we make an error handler
// const errorHandler = require('./lib/errorHandler')
const app = express()
const port = 4000
const { dbURI } = require('./config/environment')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Mongo has connected')
  })

app.use(express.json())

app.use(logger)

app.use('/api', router)

// app.use(errorHandler)

app.listen(port, () => console.log(`Listening on Port: ${port}`))
