const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
    console.log('hey its a get request');//this will be printed in the server console
})
//Get request have some limitations such as the data is visible in the URL and has a size limit. For sending large amounts of data, use POST request.

//for sensative data such as passwords, contact information, content, whole files, etc. use POST request
app.use(express.static('public'))//this will serve the static files in the public folder

// POST request
app.post('/', (req, res) => {
  res.send('Hello World! from POST!')
  console.log('hey its a post request');//this will be printed in the server console

})

// PUT request
app.put('/', (req, res) => {
  res.send('Hello World! from PUT!')
  console.log('hey its a put request');//this will be printed in the server console
})


//chaining multiple routes
//-----------------------------------------
// app.route('/chain')
//   .get((req, res) => {
//     res.send('Hello World! from chain GET!')
//     console.log('hey its a chain get request');//this will be printed in the server console
//   })
//   .post((req, res) => {
//     res.send('Hello World! from chain POST!')
//     console.log('hey its a chain post request');//this will be printed in the server console
//   })
//   .put((req, res) => {
//     res.send('Hello World! from chain PUT!')
//     console.log('hey its a chain put request');//this will be printed in the server console
//   })
//   .delete((req, res) => {
//     res.send('Hello World! from chain DELETE!')
//     console.log('hey its a chain delete request');//this will be printed in the server console
//   })
//--------------------------------------------------------

//Serving html Template files
app.get('/index', (req, res) => {
//   res.sendFile(__dirname + '/views/index.html')//this will serve the index.html file in the views folder
  console.log('hey its a template request');//this will be printed in the server console
//   res.send("Hello World! from template");//this will send the response as a string
// res.sendFile('templates/index.html');//relative path will work only if the file is in the same folder as the main.js file

//absolute or root specified path need to be used
res.sendFile('templates/index.html', { root: __dirname });
//many other ways to send files
//   res.sendFile('index.html', { root: __dirname + '/views' });//this will serve the index.html file in the views folder
})

app.get("/api", (req, res) => {
  res.json({ name: 'John Doe', age: 30 })//this will send the response as a json object
  console.log('hey its a json request');//this will be printed in the server console
})

//-----------------------------------------
//routing for organizing the code
const blog = require('./routes/blog')//this will import the birds.js file in the same folder

// ...

app.use('/blog', blog)
const shop = require('./routes/shop')//this will import the birds.js file in the same folder
// ...

app.use('/shop', shop)

//-----------------------------------------


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
