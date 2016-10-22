
// server setup
var express = ('express');
var server = express();

// middleware setup
var logger = require('./middleware/logger.js');
var cors = require('cors');
var authorize = require('./middleware/auth.js');

// router setup
var forecastRouter = require('./routers/forecast.router.js');
var indexRouter = require('./routers/index.router.js');

// connects server to port 8080
var port = process.env.PORT || 8080;

server.use(express.static(__dirname + '/public'));
// the order we set up the following is the order it will show
server.use('logger');
server.use(cors());
server.use('forecastRouter');
server.use('indexRouter');

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
