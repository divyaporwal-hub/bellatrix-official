const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  }
});

const User = mongoose.model("users", UserSchema);
module.exports = User;
