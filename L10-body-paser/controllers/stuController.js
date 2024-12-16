const stuModel=require("../models/stuModel");
const dataSave=async(req,res)=>{
    const {rollno,name,city,fees}=req.body;
    // console.log(req.body);
    console.log("sab sahi hai")
    res.send("ok")

}
module.exports={
    dataSave
}