const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('Blog home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About blog')
})
// define the blog post route
router.get('/blogpost/:slug', (req, res) => {
  res.send(`fetching blog post: ${req.params.slug}`)
})

module.exports = router
