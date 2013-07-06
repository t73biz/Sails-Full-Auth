
var passport = require('passport');
module.exports = {
	
	appName: "Sails Full Auth",
	port: 1337,
	environment: 'development',
	log: {
		level: 'verbose'
	},
	express: {
		customMiddleware: function(app)
		{
			app.use(passport.initialize());
			app.use(passport.session());
		}
	}
 
};