'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/jacob', (req, res) => {
  res.send('Hello Jacob');
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);

module.exports = app;