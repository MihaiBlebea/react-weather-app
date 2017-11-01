const http = require('http');

const app = require('./app.js');
const router = require('./router.js');

var server = http.createServer(app);

module.exports = server;
