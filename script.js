
const http = require('http');
const server = http.createServer((req,res)=>{
    console.log("inside callback from create server");
    res.end("Response received at port 3030.");
});

server.listen(3030,()=>{
    console.log('my server is running on 3030 port');
});
module.exports = server;
