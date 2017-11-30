var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var ejs = require("ejs");
var session = require('express-session');

process.env.NODE_ENV = process.env.NODE_ENV || 'devel';

var config = require('./config');

module.exports = function () {
  var app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.secret
  }));
  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  app.use(express.static('./public'));
  require("../app/routes/torneio.routes")(app);
  require("../app/routes/velha.routes")(app);
  require("../app/routes/amigo.routes")(app);
  require("../app/routes/index.routes")(app);
  return app;
}
