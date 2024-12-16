const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Programm of Express");
})


app.listen(9000,()=>{
    console.log("Server run on 9000!!")
});

   
