const keystone = require('keystone');
const importRoutes = keystone.importer(__dirname);
const helmet = require('helmet');

const routes = {
    views: importRoutes('./views'),
    api: importRoutes('./api')
};

exports = module.exports = function(app) {
    app.use(helmet());
    app.disable('x-powered-by');
    // views
    app.get('/', routes.views.index);
    // API
    app.post('api/contact', routes.api.contact.add);
}