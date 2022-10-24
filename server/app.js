require("dotenv").config();
const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cors = require('cors')
const cookieParser = require("cookie-parser")

// app.get("/api",(req,res)=>{
//     res.json({"users": ["userOne","userTwo","userThree"]})

// })
app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')

app.use("/",userRouter);
app.use("/admin",adminRouter);

const {connectDb}=require('./config/connection')
connectDb()

const port = process.env.PORT || 5000
app.listen(port,()=>{console.log("server started on port 5000")})


module.exports =app;