const express=require("express");
const route =express.Router();
const stuController=require("../controllers/stuController");


route.post("datasave",stuController.dataSave);

module.exports=route;