const express=require("express");
const app=express();

const mongoose=require("mongoose");
const bodyParser = require("body-parser");
const StuRoute=require("./routes/stuRoute");
mongoose.connect("mongodb://127.0.01:27017/Kmalesh")
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'))

// Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.use("/students",StuRoute);
app.listen(8000,()=>{
    console.log("server is running on port 8000!!!!");
})

