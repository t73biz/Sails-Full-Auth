var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
 
passport.serializeUser(
  function(user, done)
  {
  		done(null, user.id);
	}
);
 
passport.deserializeUser(
  function(id, done)
  {
    Users
      .find(id)
      .done(
        function (err, user)
        {
          done(err, user);
        }
      );
  }
);
 
 
passport.use(
  new LocalStrategy(
    function(username, password, done)
    {
      process.nextTick(
        function ()
        {
          Users.find(
            {
              name: username
            }
          )
          .done(
            function(err, user)
            {
              if (err)
              {
                return console.log(err);
              }

              if (!user)
              {
                return done(
                  null,
                  false,
                  {
                    message: 'Unknown user ' + username
                  }
                );
              }

              if (!Users.checkPass(password, user.pass))
              {
                return done(
                  null,
                  false,
                  {
                    message: 'Invalid password'
                  }
                );
              }
              return done(null, user);
            }
          )
        }
      );
    }
  )
);