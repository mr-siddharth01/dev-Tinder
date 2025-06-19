const mongoose = require('mongoose');

const connectDB = async ()=>{
 await mongoose.connect(
   "mongodb+srv://mrsingh:IK07AZuy2smsZibh@mrsingh.dz9j6tw.mongodb.net/devTinder"
 )
}

module.exports = connectDB