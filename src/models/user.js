const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const userSchema = new Schema({
  firstName : {
    type : String
  },
  lastName : {
    type : String
  },
  Age : {
    type : Number
  }
})

const User = mongoose.model("User",userSchema);
module.exports = User




















// const mongoose = require("mongoose");
// const {Schema} = require('mongoose');

// const userSchema = new Schema({
//   firstName: {
//     type: String,
//   },
//   lastName: {
//     type: String,
//   },
//   emailId: {
//     type: String,
//   },
//   password: {
//     type: String,
//   },
//   age: {
//     type: Number,
//   },
//   gender: {
//     type: String
//   }
// });

// const User = mongoose.model('User',userSchema); // you can also directly exports it -  module.exports = mongoose.model('User',userSchema);

// module.exports = User;
