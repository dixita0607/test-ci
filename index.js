const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World!');
});

const port = process.env.PORT || 8080;

server.listen(port, () => console.log(`Listening on ${port}`));
