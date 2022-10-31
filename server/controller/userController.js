const app = require("../app");
// const { db } = require("../model/userModel");
const User = require('../model/userModel');
const AppliForm =require('../model/applicationModel')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const multer = require('multer')
const mongoose= require("mongoose")


  





const postSignup =async(req,res)=>{
    try {
        // console.log('hdhhdhhdh');
        console.log({...req.body});
        let {username,email,phone,password}=req.body
        password=await bcrypt.hash(password,10)

                const user = await new User({
                    username,
                    email,
                    phone,
                    password
                })
               await user.save()
               res.status(200).json({res:user})
            } catch (error) {
                console.log(error.message);
            }   
            // console.log(req.body,'gdhfghdgfhdj')
}

const postLogin =async(req,res)=>{
    // console.log(req.body);
    const {email,password}=req.body;
    const user= await User.findOne({email});
    // console.log(password);
    // console.log(user);
    if (!user) {
        return res.json({error:"User not found"})
    }
 
    const auth = await bcrypt.compare(password,user.password);
    console.log(auth,"klklk");
    if (auth) {
        console.log("entered");
        const token = jwt.sign({email:user.email},process.env.JWT_SECRET)
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






const homePage =async(req,res,next)=>{
    console.log("Homepage Jwt verified")
    try {
   

         console.log(req.user)
         const useremail=req.user.email
               User.findOne({email:useremail}).then((data)=>{
               res.send({state:"ok",data:data})
        }).catch((error)=>{
            res.send({status:"homepage error",data:error})

        })

    } catch (error) {
        console.log(error.message);
    }

}

const applicationForm = async(req,res)=>{
    console.log(req.body);
    try {
        let {name,email,city,state,companyname,phone,address,image,userId}=req.body
        let pending = await AppliForm.findOne({userId,status:"pending"})
        console.log(pending);
        if (pending) {
            console.log('detailsssssssssss');
            res.json('your application is pending plese wait to approve it .')
        }else{
            console.log('no details');
            const appForm =  new AppliForm({
                name,
                email,
                city,
                state,
                companyname,
                phone,
                address,
                image,
                userId:mongoose.Types.ObjectId(userId)
            })
    
            await appForm.save()
            res.json({state:'ok',res:appForm})
        }

    } catch (error) {
        console.log(error.message);
    }

}

const checkApplication =async(req,res)=>{
    let{userId}=req.body
    let pending = await AppliForm.findOne({userId,status:"pending"})
    if (pending) {
        res.json({status:'found'})
    }else{
        res.json({status:'error'})
    }

}


module.exports={postSignup,postLogin,homePage,applicationForm,checkApplication}