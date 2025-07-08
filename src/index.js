const express = require('express');
const app = express();
const User = require('./models/user')
const connectDB = require("./config/database")

app.use(express.json());

app.post('/signup', async(req,res)=>{
  console.log(req.body);
  const user = new User(req.body)
   try{
    await user.save()
    res.send('User log')
    console.log("User Saved!")
  } 
  catch(err){
    res.status(500).send('User not Saved due to Server ERROR')
    console.log('User not Saved due to Server ERROR')
  } 
})


app.get('/user',async (req,res)=>{
 const age =  req.body.Age;
 
 try{
 const user =  await User.findOne({Age : age})
 if(!user){
  res.status(400).send('User Not Found')
 }
 res.send(user);
 } 
 catch(err){
  res.status(400).send("Something went wrong!")
 }

}) 


// For delete the document with the use of userId:
app.delete('/user', async(req,res)=>{
  const userId = req.body.userId
  try{
   const user1 = await User.findByIdAndDelete({_id : userId})
   res.send('User deleted successfully')
   console.log("User Deleted : ",userId)
  }
  catch(err){
    res.status(500).send('Something went wrong!')
  }
})

// update the data 
app.patch('/user', async(req,res)=>{
  const userId = req.body.Id
  const data = req.body
  try{
     await User.findByIdAndUpdate({_id : userId},data)
     res.send('updated')
  }catch(err){ 
    res.send('Something went wrong')
  }
})


connectDB()
try{
  console.log('Database Connection Established!')
  app.listen('3000',() => {
  console.log("success port :", 3000 )
})
} catch(err){
  console.log('DB Connection Fault!', err)
}































// const express = require('express')
// const app = express();
// const connectDB = require('./config/database');
// const User = require('./models/user')

// app.post('/signup', async (req,res)=>{
//    // Creating a new instance of the User model

//   const user = new User({
//     firstName : "Adarsh",
//     lastName : "Singh",
//     emailId : "siddhu1146@gmail.com",
//     password : "siddhu  @123"
//   }) 
   
//   try{
//     await user.save();
//     res.send("User added successfully!")
//   }catch(err){
//     console.error('something happen while signup', err.message)
//     res.status(500).send("Something went wrong while Sign up")
//   }
// })



// connectDB()
// .then(()=>{
//     console.log('Database Connection Established!')

//     app.listen(3000,()=>{
//       console.log('Server Start Running on Port No.3000')
//     })
// })
// .catch((err)=>{
//   console.error('Server Error due to Database',err)
// })  