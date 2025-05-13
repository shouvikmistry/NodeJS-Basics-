//Common JS
// const http = require('node:http');

//Express JS
import http from "http";

//Named Export imported
import{a,b,c,d,e,f} from "./myModule.js";

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  //name export value printed
  console.log(`Named export value of a : ${a}, b : ${b}, c : ${c}, d : ${d}, e : ${e}`);
});