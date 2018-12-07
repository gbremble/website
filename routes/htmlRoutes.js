// ### ROUTING ###
module.exports = function(app) {
    app.get('/', (req, res) => {
        res.render('index');
    });
    app.get('/projects', (req, res) => {
        res.render('projects');
    });
    app.get('/writing', (req, res) => {
        res.render('writing');
    });
    app.get('/about', (req, res) => {
        res.render('about');
    });
    app.get('*', (req, res) => {
        res.render('404');
    });
};
