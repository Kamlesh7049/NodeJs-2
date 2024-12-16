const express=require("express");
const route=express.Router();
const StuController=require("../controllers/stuController")
route.get("/stuinfo",StuController.stuhomePage)


module.exports=route;