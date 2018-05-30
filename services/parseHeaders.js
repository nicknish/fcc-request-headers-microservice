const userAgentParser = require('ua-parser');
const acceptLanguageParser = require('accept-language-parser');

const parseIp = req =>
  req.headers['X-Forwarded-For'] ||
  req.headers['x-forwarded-for'] ||
  req.client.remoteAddress;

const parseLang = headers =>
  acceptLanguageParser.parse(headers['accept-language']);

const parseUserAgent = headers => userAgentParser.parse(headers['user-agent']);

module.exports = {
  parseIp,
  parseLang,
  parseUserAgent
};
