// ### ROUTING ###
// eslint-disable-next-line func-names
module.exports = function (app) {
  app.get('/', (req, res) => {
    res.render('index', { title: 'Hello — bremble.co' });
  });
  app.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects — bremble.co' });
  });
  app.get('/projects/:projectName', (req, res) => {
    const project = req.params.projectName;
    res.render(project, { title: 'Projects — bremble.co' });
  });
  app.get('/writing', (req, res) => {
    res.render('writing', { title: 'Writing — bremble.co' });
  });
  app.get('/about', (req, res) => {
    res.render('about', { title: 'About — bremble.co' });
  });
  app.get('*', (req, res) => {
    res.status(404).render('404', { title: '404: Not found — bremble.co' });
  });
};
