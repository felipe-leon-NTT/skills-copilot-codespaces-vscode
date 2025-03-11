// Create web server
// Run: node comments.js
// Test: curl -v http://localhost:3000/comments

var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(3000);

console.log('Server running at http://localhost:3000/');