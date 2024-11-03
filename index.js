// index.js
// where your node app starts

require('dotenv').config();
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); 

// Serve static files
app.use(express.static('public'));

// Basic routing
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// API endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/whoami', function (req, res) {
  const ipaddress = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software
  });
});


// Start server
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
