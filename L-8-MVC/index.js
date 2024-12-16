const express=require("express");
const app=express();
const StuRoute=require("./routes/stuRoute");
app.use("/students",StuRoute)




app.listen(8000,()=>{
    console.log("Server Run on 8000!!")
})