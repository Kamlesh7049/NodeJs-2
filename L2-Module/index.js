const http=require("http");
const Myclg = require('./cybrom.js');
http.createServer((req,res)=>{
    res.write("<h1>Welcome !!</h1>");
    res.write(Myclg.Mycollege())
    res.write(Myclg.MyFees())
    res.end("<h2>....Server Ending......</h2>");
}).listen(9000);