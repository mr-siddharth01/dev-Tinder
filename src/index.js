const express = require('express')
const app = express();
const connectDB = require('./config/database');
const User = require('./models/user')

app.post('/signup', async (req,res)=>{
   // Creating a new instance of the User model

  const user = new User({
    firstName : "Adarsh",
    lastName : "Singh",
    emailId : "siddhu1146@gmail.com",
    password : "siddhu  @123"
  }) 
   
  try{
    await user.save();
    res.send("User added successfully!")
  }catch(err){
    console.error('something happen while signup', err.message)
    res.status(500).send("Something went wrong while Sign up")
  }
})



connectDB()
.then(()=>{
    console.log('Database Connection Established!')

    app.listen(3000,()=>{
      console.log('Server Start Running on Port No.3000')
    })
})
.catch((err)=>{
  console.error('Server Error due to Database',err)
})  