const express=require("express")
const mongoose=require("mongoose")
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())
require("dotenv").config()
mongoose.connect("mongodb://127.0.0.1:27017/clg").then(()=>{console.log("Db connected success");})
.catch(()=>console.log("Db connection Error"))
const stdlist=mongoose.model("stdlist",{
    name:String
},"std")
app.listen(process.env.PORT,()=>{
    console.log("server srarted");
})
app.get("/data",(req,res)=>{
    stdlist.find().then((data)=>{
        res.send(data)
    })
})
app.post("/datasent",(req,res)=>{
    var ret=req.body.newvalue
    arr.push(ret)
})


