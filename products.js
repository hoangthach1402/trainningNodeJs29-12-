const express = require('express')
const Product = require('./models/Product') // new
const router = express.Router()
// get all Post /
router.get('/products', async (req, res) => {
  // const products = await Product.find()
  // res.send(products)
  res.send('all products')
})

module.exports = router
