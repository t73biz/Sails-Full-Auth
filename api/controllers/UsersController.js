/*---------------------
	:: Users 
	-> controller
---------------------*/
var UsersController = {
	create: function(req, res)
	{
		if(req.body)
		{
			req.body.pass = Users.hashPass(req.body.pass);
			Users.create(req.body).done(
				function(err, user)
				{
					if (err)
					{
						res.cookie('error', "There was an error" + err);
						res.redirect('/register');
						return;
					}
					else
					{
						res.cookie('info', "You have succesfully registered.");
						res.redirect('/login');
						return;
				  	}
				}
			);
		}
		else
		{
			res.redirect('/login');
			return;
		}
	},

	index: function(req, res)
	{
		Users.findAll()
		.done(
			function(err, users)
			{
				if (err) {
					res.cookie('error', "There was an error" + err);
					res.redirect('/');
					return;
				} else {
					return res.view({
						users: users
					});
				}
			}
		);
	},

	view: function(req, res)
	{
		Users.find(req.params.id)
		.done(
			function(err, user)
			{
				if (err) {
					res.cookie('error', "There was an error" + err);
					res.redirect('/');
					return;
				} else {
					return res.view({
						user: user
					});
				}
			}
		);
	}
};
module.exports = UsersController;