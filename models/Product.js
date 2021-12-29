const mongoose = require('mongoose')
const schema = mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
})

module.exports = mongoose.model('Product', schema)
