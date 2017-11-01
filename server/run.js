const moment = require('moment');

const app = require('./app.js');
const server = require('./server.js');
const router = require('./router.js');
const geo = require('./geolocation.js');

const port = process.env.PORT || 3000;

// Set up port to listen
app.listen(port, function() {
    console.log('Started app on port', port);
});
