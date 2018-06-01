// NPM pkg
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

// create express server
var app = express();

// PORT will work on local host 8080
var PORT = process.env.PORT || 8080;

// standard bodyParser
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// add api-routes file to server
require('./app/routing/api-routes.js')(app);
// add html-routes file to server
require('./app/routing/html-routes.js')(app);

// Check if server is running when press node.js
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

