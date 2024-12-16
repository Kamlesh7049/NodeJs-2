//   const fs=require("fs");
//   fs.open("raj.txt","w",(err)=>{
//     if(err) throw err;
//     console.log("file  successful created !!");
//   })


// const fs =require("fs");
// fs.writeFile("Kamlesh.pdf","Welcome to Bhopal Developer!!",(err)=>{
//     if(err) throw err;
//     console.log("File Created!!")
// })



// const fs=require("fs");
// fs.unlink("kamlesh.pdf",(err)=>{
//     if(err) throw err;
//     console.log("File deleted!!")
// })



// const fs = require("fs");
// fs.rename("raj.txt","radha.pdf",(err)=>{
//     if(err) throw err;
//     console.log("File Renamed!!")
// })



const http=require("http");

http.createServer((req,res)=>{
    res.write("<h1>Hello Developer!!</h1>")
    res.end("<h2>Hello Developer Ending!!</h2>")

})

