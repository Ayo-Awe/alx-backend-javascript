const { createServer } = require('http');

const app = createServer();

app.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello Holberton School!');
  res.end();
});

module.exports = app;

app.listen(1245);
