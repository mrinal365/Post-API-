//Importing Express
const express=require('express');
const app=express();

//Importing DB Connection
const connectDB=require("./DB/Connection")

//Executing DB Connection
connectDB();
app.use(express.json({extended:false}));

//Middleware to API>User.js
app.use('/removeDuplicates',require('./API/User'));




//Starting listening to the server
app.listen(3000,()=>{
    console.log("Server Started");
});