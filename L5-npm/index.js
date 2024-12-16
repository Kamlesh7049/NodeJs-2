const http=require("http");//inbuilt lib.
const uc=require("uppercase");//lib.
http.createServer((req,res)=>{
    res.write("Welcome Developer!!")
    res.write(uc("mern stack"));
    res.end();
}).listen(9000)