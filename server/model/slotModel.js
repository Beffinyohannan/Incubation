const mongoose = require('mongoose')

const slotSchema =mongoose.Schema({
    name:String,
    id:String,
    bookedId:String,
    status:{
        type:Boolean,
        default:false
    }
})

const slot = mongoose.model("bookingSlot",slotSchema)

module.exports=slot