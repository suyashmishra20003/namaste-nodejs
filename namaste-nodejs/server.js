// const http = require("http");
const http = require("node:http"); // both are correct as this  is a built in module in node it can be written like this

const server = http.createServer((req,res)=>{
    if(req.url === "/secret"){
        res.end("There is no secret data")
    }
    res.end("Hello World")
})

server.listen(8000);