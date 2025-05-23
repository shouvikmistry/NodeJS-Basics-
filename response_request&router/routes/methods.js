const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('Methods home page')
})


//response download methods
router.get('/download', (req, res) => {
  res.download('templates/shouvik.txt')//this will download the shouvik.txt file in the templates folder
  console.log('hey its a download request');//this will be printed in the server console
})

// example route using res.end()
// This route will end the response without sending any data
// This is useful when you want to end the response without sending any data
router.get('/end', (req, res) => {
    res.write('This is the end of the response.');// Write some data to the response
    res.end();// End the response
    console.log('hey its a end request');//this will be printed in the server console
});

// example route using res.json()
// This route will send a JSON response
router.get('/json', (req, res) => {
    const jsonResponse = { message: 'This is a JSON response' };
    res.json(jsonResponse);// Send a JSON response
    console.log('hey its a json request');//this will be printed in the server console
});

// example route using res.jsonp()
// This route will send a JSONP response
// JSONP is a way to request data from a server in a different domain
//jsonp is different from json, defferences are its supported in older browsers
router.get('/jsonp', (req, res) => {
    const jsonpResponse = { message: 'This is a JSONP response' };
    res.jsonp(jsonpResponse);// Send a JSONP response
    console.log('hey its a jsonp request');//this will be printed in the server console
});

// example route using res.redirect()
// This route will redirect to a different URL
// For example, if you access /redirect, it will redirect to https://www.example.com
router.get('/redirect', (req, res) => {
    res.redirect('https://www.example.com');// Redirect to a different URL
    console.log('hey its a redirect request');//this will be printed in the server console
});

// example route using res.send()
// This route will send a plain text response
router.get('/send', (req, res) => {
    res.send('This is a plain text response');// Send a plain text response
    console.log('hey its a send request');//this will be printed in the server console
});

// example route using res.sendFile()
// This route will send a file as a response
router.get('/sendfile', (req, res) => {
    res.sendFile('templates/shouvik.txt', { root: __dirname });// Send a file as a response
    console.log('hey its a sendfile request');//this will be printed in the server console
});

// example route using res.status()
// This route will send a response with a specific status code
router.get('/status', (req, res) => {
    res.status(404).send('Not Found');
    console.log('hey its a status request');//this will be printed in the server console
});

module.exports = router;
