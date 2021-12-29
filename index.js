const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes') // new
const dotenv = require('dotenv')
const products = require('./products')
var birds = require('./birds')

dotenv.config()
const PORT = process.env.PORT || 5000
mongoose
  .connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const app = express()
    app.use(express.json()) // new
    // /api/posts
    app.use('/api', routes) // new
    // /api/products
    app.use('/api', products)
    app.use('/birds', birds)
    app.listen(PORT, () => {
      console.log('Server has started!')
    })
  })
