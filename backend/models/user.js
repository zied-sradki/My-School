const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  childId: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  role:{
   type: String,
  }
});

module.exports = mongoose.model("users", userSchema);
