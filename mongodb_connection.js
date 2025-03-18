// npm i mongoose

let mongodb = require("mongoose")
require("dotenv").config()

mongodb.connect(process.env.URL)
.then(()=>{
    console.log("Connection has been established")
}).catch((e)=>{
    console.log(e)
})