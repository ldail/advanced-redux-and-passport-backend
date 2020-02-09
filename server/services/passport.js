const passport = require('passport');
const User = require('../mongoose/model');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');


const localLogin = new LocalStrategy({}, function(email, password, done) {
  
})
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'), 
  secretOrKey: config.SECRET_JWT_STRING
};

//Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  User.findById(payload.sub, function(err, user) {
    if (err) { return done(err, false) }

    if (user) {
      done(null, user);
    }
    else {
      done(null, false);
    }
  })
})

//Tell passport to use this strategy

passport.use(jwtLogin);