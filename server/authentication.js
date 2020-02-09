const User = require('./mongoose/model');

exports.signup = function(req,res,next) {
  //Check if user exists by email property
   const {email, password} = req.body;

   if (!email || !password) {
     return res.status(200).send({error: "Missing either email or password"})
   }


  //if user does exist, return error
  User.findOne({email: email}, function(err, existingUser) {
    console.log(err);
    if (err) {return next(err)}
    else if (existingUser) {
      return res.status(422).send({error: "Email in use"})
    }

    
  const user = new User({email, password})
  user.save(function(err) {
    if (err) { return next(err); }
  });

  res.status(200).json({success: true});
    
  });

  //create an save a new user record
}