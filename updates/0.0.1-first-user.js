var keystone = require('keystone');
var User = keystone.list('User');

exports = module.exports = function(done) {
  new User.model({
    displayName: 'user1',
    email: 'user@keystonejs.com',
    password: 'admin',
    isAdmin: true
  }).save(done);
};