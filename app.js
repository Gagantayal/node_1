const g = require('http');
const server=g.createServer((req,res)=>{
    console.log('incoming request');
    console.log(req.method,req.url);
    res.end("SUCCESS!");
});
server.listen(5000);