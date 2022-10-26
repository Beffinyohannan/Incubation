const mongoose = require("mongoose")


const applicationSchema = mongoose.Schema({
   name:String,
   email:String,
   city:String,
   state:String,
   companyname:String,
   phone:Number,
   address:String,
   status:{
     type:String,
     default:"pending" 
   },
   image:{
    type:String,
    require:true
   }
})

const AppliForm = mongoose.model("applicationFrom",applicationSchema)

module.exports=AppliForm