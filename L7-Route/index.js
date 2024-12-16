const express=require("express");
const app=express();
const stuRoute=require("./routes/studentRoute");
app.use("/student",stuRoute);

app.listen(8000,()=>[
    console.log("server run on 8000!!  ")
])