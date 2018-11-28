// ### DEPENDENCIES ###
var path = require('path');

// ### ROUTING ###
module.exports = function(app) {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    app.get('/projects', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/projects.html'));
    });
    app.get('/writing', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/writing.html'));
    });
    app.get('/about', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/about.html'));
    });
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/404.html'));
    });
};