
const Authentication = require('./authentication');
const passportService = require('./services/passport');
const passport = require('passport')

const requireAuth = passport.authenticate('jwt', {session: false})

module.exports = function(app) {
  app.post('/signin',Authentication.signin);
  app.post('/signup', Authentication.signup)
}