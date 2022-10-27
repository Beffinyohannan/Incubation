const app = require("../app");
const AppliForm = require('../model/applicationModel')
const jwt = require("jsonwebtoken")
const Slot = require('../model/slotModel');
const { response } = require("../app");


const admin = {
    adminEmail: 'admin@gmail.com',
    adminPassword: 12345
}

const AdminLogin = async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    // const user= await User.findOne({email});
    // console.log(password);
    // console.log(user);


    // const auth = await bcrypt.compare(password,user.password);
    // console.log(auth,"klklk");


    if (email == admin.adminEmail && password == admin.adminPassword) {
        console.log("entered");
        const token = jwt.sign({ email: admin.adminEmail }, process.env.JWT_SECRET)
        console.log(token);
        if (res.status(201)) {
            console.log('hai');
            return res.json({ state: "ok", data: token })
        } else {
            console.log('hello');
            return res.json({ error: "error" });
        }
    }
    return res.json({ status: "error", error: "Invalid Password" })
}

const getDashboard = (req, res) => {
    AppliForm.find({ status: "pending" }).then((data) => {

        //  console.log(data);
        res.json(data)
    }).catch((error) => {
        console.log(error.message);
    })

}

const approveForm = (req, res) => {
    try {
        AppliForm.findByIdAndUpdate({ _id: req.params.id }, { $set: { status: 'approved' } }).then((response) => {
            if (response) {
                res.status(200).json({ update: true })
            }
        }).catch((error) => {
            res.json(error.message)
        })
    } catch (error) {
        console.log(error.message);
        res.json(error.message)
    }
}

const rejectFrom = (req, res) => {
    try {
        AppliForm.findByIdAndUpdate({ _id: req.params.id }, { $set: { status: 'rejected' } }).then((response) => {
            if (response) {
                res.status(200).json({ update: true })
            }
        }).catch((error) => {
            res.json(error.message)
        })
    } catch (error) {
        console.log(error.message);
        res.json(error.message)

    }
}


const approvedList = (req, res) => {
    // console.log('approved route');
    AppliForm.find({ status: "approved" }).then((data) => {

        //  console.log(data);
        res.json(data)
    }).catch((error) => {
        console.log(error.message);
        res.json(error.message)
    })

}
const rejectedList = (req, res) => {
    // console.log('rejected route');
    AppliForm.find({ status: "rejected" }).then((data) => {

        //  console.log(data);
        res.json(data)
    }).catch((error) => {
        console.log(error.message);
        res.json(error.message)
    })

}

const createSlot = async (req, res) => {
    const { name, id } = req.body

    const slot = await Slot.findOne({ id })

    if (slot) {
        res.json('slot name already exist')

    } else {
        try {
            const bookslot = await new Slot({
                name, id
            })
            await bookslot.save()
            res.status(200).json({ state: "ok" })
        } catch (error) {
            console.log(error.message);
            res.json(error.message)
        }

    }
}

 const bookingSlot=(req,res)=>{
    Slot.find().then((data)=>{
        res.json(data)
    }).catch((error)=>{
        console.log(error.message);
        res.json(error.message)
    })
}


const slotBooking =(req,res)=>{
    try {
        AppliForm.findByIdAndUpdate({_id:req.query.companyId},
            {
                $set:{status:'booked'}
            }).then((response)=>{
                if (response) {
                    Slot.findOneAndUpdate({id:req.query.slotId},
                        {
                            $set:{
                                "bookedId":req.query.companyId,
                                "status":true
                            }
                        }).then((response)=>{
                            res.status(200).json(response)
                        }).catch((err)=>{
                            res.json(err.message)
                        })
                }
            }).catch((err)=>{
                res.json(err.message)
            })
    } catch (error) {
        res.json(error.message)
    }
}


module.exports = {
    AdminLogin,
    getDashboard,
    approveForm,
    rejectFrom,
    approvedList,
    rejectedList,
    createSlot,
    bookingSlot,
    slotBooking
    
}