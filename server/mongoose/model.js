const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

//Define our model

const userSchema = new Schema({
  email: {type: String, unique: true, lowercase: true, required: true},
  password: {type: String, required:true}
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err); }
    callback(null, isMatch);
  })
}

//do this before executing
userSchema.pre('save',function(next) {

  //get access to the userschema
  const user = this;

  //do a callback after waiting for the salt to generate
  bcrypt.genSalt(10,function(err,salt) {
    if (err) { return next(err) }

    //hash (encrypt) our password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if(err) { return next(err) }

      //overwrite plain text password with encrypted password
      user.password = hash;
      next();
    })
  })
})

//Create model class
const ModelClass = mongoose.model('user', userSchema);


//Export the model
module.exports = ModelClass;