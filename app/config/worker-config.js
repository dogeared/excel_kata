var http = require('http');
var express = require('express');
var application = express();
var bodyParser = require('body-parser');
var routeConfig = require('./route-config');
var settingsConfig = require('./settings/settings-config');

function configureWorker(application) {
  configureApplication(application);
  configureRoutes(application);

  startServer(application);
}

function configureApplication(application) {
  application.set('port', (process.env.PORT || settingsConfig.settings.workerPort))

  application.use(bodyParser.json());

  application.use(function(req, res, next) {
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    res.type('application/json');
    next();
  });
}

function configureRoutes(application) {
  routeConfig.registerRoutes(application);
}

function startServer(application) {
  var server = http.createServer(application);

  //server.listen(application.get('port'), settingsConfig.settings.hostName, settingsConfig.settings.queueLength, function() {
  server.listen(application.get('port'), function() {
    console.log('listening at http://%s:%s', settingsConfig.settings.hostName, application.get('port'));
  });
}

configureWorker(application);
