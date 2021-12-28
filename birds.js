var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', async (req, res) => {
  await res.send('Birds home page')
})
// define the about route
router.get('/about', async (req, res) => {
  await res.send('About birds')
})

module.exports = router
