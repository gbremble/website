// ### DEPENDENCIES ###
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

// ### EXPRESS CONFIG ###
var app = express();

var PORT = process.env.PORT || 3000;

// ### MIDDLEWARE ###
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static('public'));

// ### HANDLEBARS CONFIG ###
app.engine(
    'handlebars',
    exphbs({
        defaultLayout: 'main',
    }),
);
app.set('view engine', 'handlebars');

// ### ROUTER ###
require('./routes/htmlRoutes')(app);

// ### LISTENER ###
app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
});