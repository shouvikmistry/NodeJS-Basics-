# Express.js Request Handling Guide

This guide covers essential concepts for handling HTTP requests in Express.js, including different request methods, parameter handling, route chaining, serving HTML files, and using Postman for API testing.

## Table of Contents
1. [Handling POST, GET, PUT Requests](#1-handling-post-get-put-requests)
2. [Chaining of Requests](#2-chaining-of-requests)
3. [Serving HTML Files](#3-serving-html-files)
4. [Installing and Using Postman](#4-installing-postman)
5. [Express Router](#5-express-router)

---

## 1. Handling POST, GET, PUT Requests

### Basic Request Handling

#### POST Requests
```javascript
app.post('/api', (req, res) => {
    console.log('POST request received');
    res.send('Post request received');
});
```
#### GET Requests
```javascript
app.get('/api', (req, res) => {
    console.log('GET request received');
    res.send('Get request received');
});
```
#### PUT Requests
```javascript
app.put('/api', (req, res) => {
    console.log('PUT request received');
    res.send('Put request received');
});
```
#### DELETE Requests
```javascript
app.delete('/api', (req, res) => {
    console.log('DELETE request received');
    res.send('Delete request received');
});
```
### Handling Parameters
```javascript
app.get('/api', (req, res) => {
    console.log(req.query);
    res.send('Get request received');
});
```
### Handling URL Parameters
```javascript
app.get('/api/:id', (req, res) => {
    console.log(req.params);
    res.send('Get request received');
});
```
### Handling Query Parameters
```javascript
app.use(express.json());
app.post('/api', (req, res) => {
    console.log(req.query);
    res.send('Post request received');
});
app.get('/api', (req, res) => {
    console.log(req.query);
    res.send('Get request received');
});
```

## 2 Chaining of Requests
### Chaining GET, PUT and POST Requests
```javascript
app.get('/api', (req, res) => {
    console.log('GET request received');
    res.send('Get request received');
}).put((req, res) => {
    console.log('PUT request received');
    res.send('Put request received');
}).post((req, res) => {
    console.log('POST request received');
    res.send('Post request received');
});
```
### 3. Serving HTML Files

```javascript
app.get('/api', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
```
### 4. Installing Postman
#### Postman is a popular API testing tool that allows you to send requests to your API and view the responses. It provides a user-friendly interface for testing and debugging APIs.

#### Steps to Install Postman:
- Download Postman from the official website: [Postman Download](https://www.postman.com/downloads/)
- Install Postman by following the installation instructions for your operating system.
- Open Postman and create a new request.
- Select the request method (GET, POST, PUT, DELETE) from the dropdown menu.
- Enter the URL of your API endpoint in the address bar.
- Click on the "Send" button to send the request.
- View the response in the lower section of the Postman window.
- You can also add headers, body data, and query parameters as needed.
- Postman allows you to save requests, organize them into collections, and share them with others.
- You can also use Postman to test APIs by writing tests in JavaScript and running them automatically.
### 5. Express Router
