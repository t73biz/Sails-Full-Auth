/**
* Allow any authenticated user.
*/
module.exports = function (req,res,next) {
	
	var is_auth = req.isAuthenticated()
	if (is_auth) {
		return next();
	}
	else
	{
		res.cookie('error', "You are not allowed to go there. Please login first.");
		return res.redirect('/login')
	}
};