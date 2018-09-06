require('dotenv').config();
const keystone = require('keystone');

// configuration
keystone.init({
    'name': 'my-project',
    'brand': 'my-project',
    'static': './public',
    'favicon': './public/icon.png',
    'view engine': 'pug',
    'views': './templates/views',
    'emails': './templates/emails',
    'auto update': true,
    'session': true,
    'session store': 'connect-mongo',
    'auth': true,
    'user model': 'User',
    'port': 3000
});

// import models 
keystone.import('models');

// import routes
keystone.set('routes', require('./routes'));

keystone.start();