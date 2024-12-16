const express=require("express");
const route=express.Router();

route.get("/stuinfo",(req,res)=>{
    res.send("This is Student Information")
})
route.post("/stusave",(req,res)=>{
    res.send("Data Save!!! ")
})
module.exports=route 