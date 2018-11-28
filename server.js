// ### DEPENDENCIES ###
var express = require('express');
var bodyParser = require('body-parser');

// ### EXPRESS CONFIG ###
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ### ROUTER ###
require('./routes/htmlRoutes')(app);

// ### LISTENER ###
app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
});