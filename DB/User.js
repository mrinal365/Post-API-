const mongoose=require('mongoose');

//Creating Schema
const user=mongoose.Schema({
    outputArray:{
        type:Array
    }
})

//export
module.exports=User=mongoose.model('user',user);