const express = require('express')
const Post = require('./models/Post') // new
const router = express.Router()
// get all Post /
router.get('/posts', async (req, res) => {
  const posts = await Post.find()
  res.send(posts)
})

module.exports = router
