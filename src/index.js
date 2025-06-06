const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send(
        'Hello from server ✋'
    );
  
})

app.get('/profile', (req,res)=>{ 
    let profile  =  {
            Name : "Siddharth Singh",
            age : "20",
        }
     res.send(profile)
})


app.listen(3000,()=>{
   console.log('Server started successfully')
})