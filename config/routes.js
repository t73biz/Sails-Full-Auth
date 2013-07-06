module.exports.routes = {
	'/login' : {
		controller : 'auth',
		action     : 'login'
	},
	'/process' : {
		controller : 'auth',
		action     : 'process'
	},
	'/logout' : {
		controller : 'auth',
		action     : 'logout'
	},
	'/register': {
		controller : 'auth',
		action     : 'register'
	},
	'get /users': {
		controller	: 'users',
		action		: 'index'
	},
	'/': {
		controller : 'users',
		action     : 'index'
	},
	'get /users/:id': {
		controller	: 'users',
		action		: 'view'
	}
};
