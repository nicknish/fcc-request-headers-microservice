const express = require('express');
const {
  parseIp,
  parseLang,
  parseUserAgent
} = require('./services/parseHeaders');

const app = express();

app.get('*', (req, res) => {
  const ipaddress = parseIp(req);

  const languages = parseLang(req.headers);
  const language = `${languages[0].code}-${languages[0].region}`;

  const {
    os: { family, major, minor, patch }
  } = parseUserAgent(req.headers);
  const software = `${family} ${major}.${minor}.${patch}`;

  res.json({
    ipaddress,
    language,
    software
  });
});

app.listen(3000);
console.log('Listening on port 3000');
