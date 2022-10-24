const { postSignup, postLogin, homePage, applicationForm } = require('../controller/userController');
const check = require('../middleware/authjwt');
const User = require('../model/userModel');
const router = require('express').Router()


router.post("/signup",postSignup)
router.post("/login",postLogin)
router.post("/homepage",check,homePage)
router.post("/application-from",applicationForm)



module.exports = router;