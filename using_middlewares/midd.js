app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something wrong");
  }
});

app.get('/getUserData', (req, res, next) => {
   try {
       throw new Error("abcd");
   } catch (err) {
       next(err); // Yeh line error-handling middleware ko trigger karegi
   }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send(`Error : ${err.message}`);
  }
});

app.use("/admin",(req,res,next)=>{
    let para = 2;
    let check = 2 === para;
    if(check){
       console.log('Access Granted!')
        next();
    }
    else{
       res.status(401).send("Unauthorized access");
    }});

app.get('/admin/profile', (req,res)=>{
    let profile  =  {
            Name : "Siddharth Singh",
            age : "20",
        }
     res.send(profile)
})


