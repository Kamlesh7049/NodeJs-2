 const express=require("express");
 const app=express();
 app.get("/",(req,res)=>{
    res.send("this is get response to the user!!!")
 })
 app.get("/save",(req,res)=>{
    res.send("this is get response to the user!!!")
 })
 app.post("/save",(req,res)=>{
    res.send("this is post response  server to the user!!!")
 })
 
app.listen(8000,()=>{
    console.log("server is running on port 8000");
})