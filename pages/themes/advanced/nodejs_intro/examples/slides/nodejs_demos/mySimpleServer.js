const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello from My Server!\n')
});

server.listen(port, hostname, () => {
  console.log(`Nodejs server is running at http://${hostname}:${port}/`)
});

