// ### ROUTING ###
module.exports = function(app) {
    app.get('/', (req, res) => {
        res.render('index', { title: 'bremble.co' });
    });
    app.get('/projects', (req, res) => {
        res.render('projects', { title: 'Projects' });
    });
    app.get('/projects/:name', (req, res) => {
        res.render(req.params.name, { title: 'Projects' });
    });
    app.get('/writing', (req, res) => {
        res.render('writing', { title: 'Thoughts and such'});
    });
    app.get('/about', (req, res) => {
        res.render('about', { title: 'About Greg' });
    });
    app.get('*', (req, res) => {
        res.status(404).render('404', { title: '404: Not found' });
    });
};
