const app = require("../app");
const AppliForm =require('../model/applicationModel')
const jwt = require("jsonwebtoken")


const admin={
     adminEmail : 'admin@gmail.com',
    adminPassword : 12345
}

const AdminLogin =async(req,res)=>{
    // console.log(req.body);
    const {email,password}=req.body;
    // const user= await User.findOne({email});
    // console.log(password);
    // console.log(user);
   
 
    // const auth = await bcrypt.compare(password,user.password);
    // console.log(auth,"klklk");


    if (email==admin.adminEmail && password==admin.adminPassword) {
        console.log("entered");
        const token = jwt.sign({email:admin.adminEmail},process.env.JWT_SECRET)
        console.log(token);
        if (res.status(201)) {
            console.log('hai');
            return res.json({state:"ok",data:token})
        }else{
            console.log('hello');
            return res.json({error:"error"});
        }
    }
  return  res.json({status:"error",error:"Invalid Password"})
}

const getDashboard=(req,res)=>{
 AppliForm.find({status:"pending"}).then((data)=>{

    //  console.log(data);
     res.json(data)
 }).catch((error)=>{
    console.log(error.message);
 })

  
}


module.exports={
    AdminLogin,
    getDashboard
}