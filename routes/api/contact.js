const keystone = require('keystone');
const Contact = keystone.List('Contact');

exports.add = exports.add = function(req, res) {
    const message = new Contact.model();
    const data = req.body || {};
    message.getUpdateHandler(req)
        .process(data, function(err){
            if(err) console.log('error', 'Message has not been sent!');
            else {
                res.redirect('/');
                console.log('success', 'Message has been sent!');
                return;
            }
        });
}