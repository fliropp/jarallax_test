const express = require('express');
const app = express();
var path = require('path');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('run Jarallax, make Parallax!');
})
