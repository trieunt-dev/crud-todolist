const routes = (app) => {
    app.get('/', (req, res) => {
        res.render('home');
    });
};

module.exports = routes;
