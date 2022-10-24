const mongoose = require("mongoose")
const uri = 'mongodb+srv://beffin:beffin123@cluster0.vmiklra.mongodb.net/incubation?retryWrites=true&w=majority'

 const connectDb = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
    
    },()=>console.log("Mongo db connected"))
  } catch (error) {
    console.log(error.message)
  }
}

module.exports= {connectDb}