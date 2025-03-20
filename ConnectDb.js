let mongodb = require("mongoose")
require("dotenv").config()
let url = process.env.ATLAS_URL
console.log()

mongodb.connect("mongodb+srv://ravihaariqa:Ravihaariqa123@cluster0.ceuhm.mongodb.net/")
.then(()=>{
    console.log("Database Connected")
}).catch((e)=>{
    console.log(e)
})