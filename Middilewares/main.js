const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

// Middleware function to log requests
    // This middleware logs the request method and URL
const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
    // Use the middleware function
app.use(myLogger)
// Another middleware function arrow function
app.use((req, res, next) => {
  // console.log('Another middleware')
  next()
})

// Wrong way to use middleware
/*
app.use((req, res, next) => {
  console.log('wrong middleware')
  res.send('Hack by middleware')
  // Do not call next() here, as it will not send a response
  // next() is useless after res.send()
  // This will end the request-response cycle
  // it will end here and send the response
  // If you call next() after res.send(), it will throw an error
  next()
})
*/

// correct way to send request-response cycle
/*
app.use((req, res, next) => {
  console.log('correct middleware')
  res.send('Hack by middleware')
  // Do not call next() here, as it will not send a response
})

*/

// Middleware to logger
app.use((req, res, next) => {
  fs.appendFileSync('log.txt', `${Date(Date.now())} is a - ${req.method} - ${req.url}\n`)
  // console.log('Request Method:', req.method)
  // console.log('Request URL:', req.url)
  // console.log('Request Time:', Date.now())
console.log(`${Date(Date.now())} - ${req.method} - ${req.url}`)
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

