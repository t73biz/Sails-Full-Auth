/*---------------------
	:: Users
	-> model
---------------------*/
var Users = {

	attributes: {
		name: 'STRING',
		pass: 'STRING'
	}
};

Users.hashPass = function(pass)
{
	var hasher = require('password-hash');
	return hasher.generate(pass);
}

Users.checkPass = function(pass, stored)
{
	var hasher = require('password-hash');
	return hasher.verify(pass, stored);
}

module.exports = Users;