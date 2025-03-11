require("dotenv").config()
let http_module = require("http")
let port_no = process.env.Port

http_module.createServer(function(req,res){
    res.writeHead(200,{"content-type" : "text/html"})
    res.write("<p>Server Started</p>")
    res.write("<p>Ravih-ul-Ariqa</p>")
    res.end()
}).listen(port_no,()=>{
    console.log(`Server Started at http://localhost:${port_no}`)
})