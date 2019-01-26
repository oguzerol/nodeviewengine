var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },
});

UserSchema.methods = {
  authenticate: function(plainTextPword) {
    return plainTextPword == this.password;
  }
};

module.exports = mongoose.model('user', UserSchema);