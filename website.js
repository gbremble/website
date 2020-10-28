/* eslint-disable no-console */
// ### DEPENDENCIES ###
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

// ### EXPRESS CONFIG ###
const app = express();

const PORT = process.env.PORT || 3000;

// ### MIDDLEWARE ###
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
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
  console.log(`app is listening on port ${PORT}`);
});
