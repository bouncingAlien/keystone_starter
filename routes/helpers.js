// prevent access to protected pages
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};
