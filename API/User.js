const express=require('express');
const mongoose=require('mongoose');

const User=require('../DB/User');
const route=express.Router();

route.post('/',async (req,res)=>{
    const{inputArray}=req.body;
    //let user={};
    //user.inputArray=inputArray;
    
    
    //Remove dupicate
    let set = new Set(inputArray);
    let Values = set.values();
    let outputArray=Array.from(Values)
    let answer={ }
    answer.outputArray=outputArray
    //Sending to db
    let userModel=new User(answer);
    await userModel.save();
    await console.log(userModel)
    
    res.json(answer);
})

module.exports = route;