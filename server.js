const http = require('http');
const app = require('./app');

const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, () => {
  /* eslint-disable */
  console.log(`Live and Connected on port ${port}`);
  /* eslint-enable */
});

module.exports = server;
