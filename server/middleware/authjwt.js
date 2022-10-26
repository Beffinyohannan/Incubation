const cookieParser = require("cookie-parser")
const axios = require('axios')

const jwt = require("jsonwebtoken")
const check =async (req, res, next) => {
    try {
        console.log("Check middleware")


        // axios.get('http://localhost:5000/token')
        // .then(function (response) {
        //   // handle success
        //   console.log(response.data);
        // })
        // .catch(function (error) {
        //   // handle error
        //   console.log(error);
        // })



        // console.log("cookie from browser ",req.cookies['token']);
        const token = req.body.token
        const user = jwt.verify(token, process.env.JWT_SECRET)
       if(user){
        req.user=user
        next()
       }else{
        res.send({ status: "errors", data: "no user" })
       }
    } catch (error) {
        console.log(error.message);
        res.send({ status: "errors", data: error.message })
    }

}

module.exports = check;