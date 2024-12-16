const  http=require("http");
const fs=require("fs");
http.createServer((req,res)=>{
    fs.readFile("sanju.txt",(err,data)=>{
        res.write(data)
        res.end();
})
}).listen(8000);







// const fs=require("fs");
// fs.appendFile("sanju.txt","Hello World!! We are Mern Satck Developer!",(err)=>{
//     if(err) throw err;
//     console.log("File  Successfully created  and data is written");
// })


