const express = require('express')
const app = express()
const port = 3000
//app.get('path', handler(callback))
app.get('/', (req, res) => {
  res.send('Hello World!')//response to the request
})
//Other routes
app.get('/home', (req, res) => {
  res.send('Welcome to the home page')
})
app.get('/about', (req, res) => {
  res.send('About this site')
})
app.get('/contact', (req, res) => {
  res.send('Contact us')
})
app.get('/products', (req, res) => {
  res.send('Products page')
})
//-------------------------------------------------------
// Variables query using slug
//Dynamic route
app.get('/blog/:slug', (req, res) => {
    //for url http://localhost:3000/blog/java%20anything?mode=dark
    console.log(req.params);// will output the slug :java anything
    console.log(req.query);// will output the query string { mode: 'dark' }
  res.send(`Introduction to blog post ${req.params.slug}`)
  
  //params is an object containing properties mapped to the named route “parameters” (i.e. :slug) its comes from the URL
})
//-------------------------------------------------------
//static files
app.use(express.static('public'))

app.get("/api", (req, res) => {
  res.json(
    { name: 'John Doe', age: 30 })//this will send the response as a json object
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
