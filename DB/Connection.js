//Importing Mongose
const mongoose=require('mongoose');

//Storing the Connection URL
const URL="mongodb+srv://Internship:mrinal@cluster0.oqz00.mongodb.net/Test?retryWrites=true&w=majority"

//connecting DB using Mongoose
const connectDB=async()=>{
    await mongoose.connect(URL, { 
        useUnifiedTopology: true,
        useNewUrlParser: true 
    });
    console.log("DB COnnected");
}
//Exporting the function
module.exports=connectDB